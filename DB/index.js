const { sqlite3Db } = require('./config/connectToDb')
const { createTableSqlite } = require("./model/sqlite3model")

const executeOperations = async () => {
  try {
    await createTableSqlite()
  } catch (err) {
    console.error(`No se ha podido crear la tabla`, err.message)
  } finally {
    sqlite3Db.destroy()
  }
}

executeOperations()