const test = require('node:test')
const assert = require('node:assert/strict')
const { handle } = require('./server')

function call(url) {
  return new Promise((resolve) => {
    const res = {
      status: 0,
      body: '',
      writeHead(status) {
        this.status = status
      },
      end(body) {
        this.body = body
        resolve(this)
      },
    }
    handle({ url }, res)
  })
}

test('ping returns ok', async () => {
  const res = await call('/ping')
  assert.equal(res.status, 200)
  assert.equal(res.body, 'ok')
})

test('home page says hello', async () => {
  const res = await call('/')
  assert.equal(res.status, 200)
  assert.match(res.body, /Hello from the DPR demo UI/)
})

test('probation product has its own heading', async () => {
  process.env.PRODUCT = 'probation'
  const res = await call('/')
  delete process.env.PRODUCT
  assert.equal(res.status, 200)
  assert.match(res.body, /Hello from the DPR probation demo/)
})
