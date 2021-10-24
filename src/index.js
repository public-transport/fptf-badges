import express from 'express'
import http from 'http'
import corser from 'corser'
import compression from 'compression'

import badge from './routes/badge.js'
import link from './routes/link.js'

const port = process.env.PORT
if (!port) throw new Error('please provide a PORT environment variable')

const api = express()
const server = http.createServer(api)

const allowed = corser.simpleRequestHeaders.concat(['User-Agent'])
api.use(corser.create({ requestHeaders: allowed })) // CORS
api.use(compression())

api.get('/badge/*', badge)
api.get('/link/*', link)

api.use((err, req, res, next) => {
	if (res.headersSent) return next()
	res.status(err.statusCode || 500).json({ error: true, msg: err.message })
	next()
})

server.listen(port, (e) => {
	if (e) return console.error(e)
	console.log(`Listening on ${port}.`)
})
