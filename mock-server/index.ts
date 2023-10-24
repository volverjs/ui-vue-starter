import path from 'path'
import { globSync } from 'glob'
import * as fs from 'fs'
import * as url from 'url'
import jsonServer from 'json-server'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const server = jsonServer.create()
server.use(jsonServer.defaults())

const files = globSync(`${__dirname}/db/*.json`)
const db: { [key: string]: unknown } = {}
// custom params
server.use((req, res, next) => {
    if (!Object.keys(req.query).length || req.query._fix) {
        return next()
    }
    const query = new URLSearchParams({ _fix: 'true' })
    const filter = req.query.filter as { [key: string]: string }

    if (filter?.fulltext) {
        query.append('q', filter.fulltext)
    }
    delete req.query.filter

    const page = req.query.page as { [key: string]: string }
    if (page?.number) {
        query.append('_page', page.number)
    }

    if (page?.size) {
        query.append('_limit', page.size)
    }

    if (page?.sort) {
        if (page.sort.startsWith('-')) {
            query.append('_sort', page.sort.slice(1))
            query.append('_order', 'desc')
        }
    }
    delete req.query.page

    const id = req.query.id as string
    if (id?.includes(',')) {
        id.split(',').forEach((id) => {
            query.append('id', id)
        })
    }
    delete req.query.id

    Object.keys(req.query).forEach((key) => {
        query.append(key, req.query[key] as string)
    })

    return res.redirect(307, req.url.split('?')[0] + '?' + query.toString())
})
files.forEach((file) => {
    const data = fs.readFileSync(file, 'utf8')
    db[path.basename(file, '.json')] = JSON.parse(data)
})
const router = jsonServer.router(db)
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})
