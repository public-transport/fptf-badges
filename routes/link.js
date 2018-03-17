'use strict'

const githubInfo = require('hosted-git-info')
const Promise = require('pinkie-promise')
const {fetch} = require('fetch-ponyfill')({Promise})

const error = (msg, code) => {
	const e = new Error(msg)
	e.statusCode = code
	return e
}

const route = async (req, res, next) => {
    const path = req.path.slice('/link/'.length) // todo
    const repo = githubInfo.fromUrl(path)
    // todo
    if(!repo || !repo.file) return next(error('invalid github repository', 400))

    const packageURL = repo.file('package.json')
    const packageContent = await (fetch(packageURL).then(res => res.json()).catch(e => null))
    if(!packageContent) return next(error('repository / package.json not found'))

    res.redirect(`https://github.com/public-transport/friendly-public-transport-format/tree/${packageContent.fptf}`)
	return
}

module.exports = route
