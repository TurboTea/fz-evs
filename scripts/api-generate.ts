const services = require('./services.json')
const shelljs = require('shelljs')
const args = require('minimist')(process.argv.slice(2))
const $name = args['name']
const { path } = services.find(_ => _.name === $name)!
shelljs.exec(
  `npx sta -p ${path}?private_token=ZHJh6szydd8TUSuTUAuB  -n ${$name} -o ./src/shared/api -t ./scripts/templates/default   --axios --extract-request-params --extract-request-body --type-prefix I`,
)
