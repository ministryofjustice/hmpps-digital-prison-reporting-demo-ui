const http = require('http')

function page() {
  const product = process.env.PRODUCT === 'probation' ? 'probation' : 'prison'
  const heading = product === 'probation'
    ? 'Hello from the DPR probation demo'
    : 'Hello from the DPR demo UI'
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>DPR demo</title>
  </head>
  <body>
    <h1>${heading}</h1>
    <p>This page proves the GitHub Actions release path.</p>
  </body>
</html>
`
}

function handle(req, res) {
  const url = (req.url || '/').split('?')[0]
  if (url === '/ping') {
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' })
    res.end('ok')
    return
  }
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
  res.end(page())
}

function listen(port) {
  const server = http.createServer(handle)
  server.listen(port)
  return server
}

module.exports = { handle, listen }

if (require.main === module) {
  const port = Number(process.env.PORT || 3000)
  listen(port)
  console.log(`listening on ${port}`)
}
