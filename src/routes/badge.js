import { makeBadge } from 'badge-maker'
import githubInfo from 'hosted-git-info'
import getVersion from './lib.js'

const error = (msg, code) => {
	const e = new Error(msg)
	e.statusCode = code
	return e
}

const badge = (text, color) => makeBadge({
	label: 'fptf',
	message: text,
	color,
	style: 'flat',
})

export default async (req, res, next) => {
	const path = req.path.slice('/badge/'.length) // todo
	const repo = githubInfo.fromUrl(path)
	const fptf = await (getVersion(repo).catch(err => {
		// next(error(e, 400))
		console.error(err)
		return null
	}))
	let b
	try {
		if (!fptf) b = badge('invalid', '#9f9f9f')
		else b = badge(fptf, '#ff66bb')
	} catch (err) {
		console.error(err)
		return next(error('error while generating badge', 500))
	}

	res.setHeader('Content-Type', 'image/svg+xml')
	res.end(b)
}
