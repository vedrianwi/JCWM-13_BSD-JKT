const util = require('util')
const db = require('../database')

module.exports = {
    promisfyQuery : util.promisify(db.query).bind(db)
}