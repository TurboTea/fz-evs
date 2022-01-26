const services = require('./services.json')
const shelljs = require('shelljs')
const args = require('minimist')(process.argv.slice(2))
const $name = args['name']
// 是否开启真实数据mock
const $d = args['d'] ? '-d' : ''
if ($name) {
  const { path, port } = services.find(_ => _.name === $name)!
  shelljs.exec(`prism mock ${$d} ${path}?private_token=ZHJh6szydd8TUSuTUAuB -p ${port}`)
} else {
  const command = services.reduce((pre, { path, port }) => {
    pre = `${pre} "prism mock ${$d} ${path}?private_token=ZHJh6szydd8TUSuTUAuB -p ${port}"`
    return pre
  }, '')
  shelljs.exec(`concurrently -k ${command}`)
}
