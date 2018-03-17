'use strict'

const githubInfo = require('hosted-git-info')
const Promise = require('pinkie-promise')
const {fetch} = require('fetch-ponyfill')({Promise})
const badges = require('gh-badges')
const pify = require('pify')

const error = (msg, code) => {
	const e = new Error(msg)
	e.statusCode = code
	return e
}

const badge = (text, color) => pify(badges, {errorFirst: false})({
    text: ['fptf', text],
    colorB: color,
    template: 'flat'
})

const route = async (req, res, next) => {
    const path = req.path.slice('/badge/'.length) // todo
    const repo = githubInfo.fromUrl(path)
    // todo
    if(!repo || !repo.file) return next(error('invalid github repository', 400))

    const packageURL = repo.file('package.json')
    const packageContent = await (fetch(packageURL).then(res => res.json()).catch(e => null))
    if(!packageContent) return next(error('repository / package.json not found'))

    let b
    if(packageContent.fptf){
        b = await (badge(packageContent.fptf, '#ff66bb').catch(e => null))
    }
    else{
        b = await (badge('invalid', '#9f9f9f').catch(e => null))
    }
    if(!b) return next(error('error while generating badge', 500))

    res.setHeader('Content-Type', 'image/svg+xml')
    res.end(b)
}

module.exports = route
