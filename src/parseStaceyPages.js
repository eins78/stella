const walk = require('walk')
const fs = require('fs')
const path = require('path')
const parseYAML = require('js-yaml').safeLoad
const last = require('lodash/last')
const sortBy = require('lodash/sortBy')

const rootPath = './content/'

function getOrderedPath (string) {
  const [order, ...restName] = string.split('.')
  if (!restName[0]) return { pathName: string }
  return {order, pathName: restName.join('.')}
}

function readPageData (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (fsErr, data) {
    if (fsErr) return callback({ error: fsErr })
    try {
      callback(parseYAML(data, {filename: filePath}))
    } catch (yamlErr) { callback({ error: yamlErr }) }
  })
}

function getContent (callback) {
  const results = []

  const walker = walk.walk(rootPath, { followLinks: true })

  walker.on('names', (root, nodeNamesArray) => {
    // pre-filter by name for perf
    // we only want dirs with dots and any files
    nodeNamesArray.filter((name) => name.includes('.'))
  })

  walker.on('file', (root, {name}, next) => {
    const filePath = path.join(root, name)
    const orderedPaths = path.relative(rootPath, root).split(path.sep)
      .map((part) => getOrderedPath(part))
    const page = last(orderedPaths)
    const {order} = page
    const slug = page.pathName

    // only get project/page yaml
    const ignored = !['.yml', '.yaml'].includes(path.extname(name)) ||
      !['project', 'page'].includes(path.basename(name, path.extname(name)))
    if (ignored) return process.nextTick(next)

    const pathName = orderedPaths.reduce((r, v) => path.join(r, v.pathName), '')

    readPageData(filePath, function (data) {
      results.push({ pathName, slug, order, srcFile: filePath, data })
      return next()
    })
  })

  walker.on('error', (root, {name}, next) => {
    console.log('err', name)
    next()
  })

  walker.on('end', () => {
    const pages = sortBy(results, 'srcFile')
    callback({pages})
  })
}

getContent((content) => {
  process.stdout.write(JSON.stringify(content, 0, 2))
})
