'use strict'

const githubInfo = require('hosted-git-info')

const getVersion = require('../lib')

const error = (msg, code) => {
	const e = new Error(msg)
	e.statusCode = code
	return e
}

const route = async (req, res, next) => {
    const path = req.path.slice('/link/'.length) // todo
	const repo = githubInfo.fromUrl(path)
	const fptf = await (getVersion(repo).catch(e => {
		next(error(e, 400))
		return null
	}))
	if(!fptf) return

    res.redirect(`https://github.com/public-transport/friendly-public-transport-format/tree/${fptf}`)
	return
}

module.exports = route
