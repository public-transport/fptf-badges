'use strict'

const badges = require('gh-badges')
const pify = require('pify')
const githubInfo = require('hosted-git-info')

const getVersion = require('../lib')

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
	const fptf = await (getVersion(repo).catch(e => {
		next(error(e, 400))
		return null
	}))
	if(!fptf) return

    const b = await (badge(fptf, '#ff66bb').catch(e => null))
	// const b = await (badge('invalid', '#9f9f9f').catch(e => null))
    if(!b) return next(error('error while generating badge', 500))

    res.setHeader('Content-Type', 'image/svg+xml')
    res.end(b)
}

module.exports = route
