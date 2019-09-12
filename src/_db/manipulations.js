import { readMySQLQuery }           from '../_fs/readFile.js'
import { queryMySQLConnection }     from '../_db/connection.js'

export function insertRowInDB(result, connection){
  readMySQLQuery('../requests/insert.sql')
  .then(
    text_query  => queryMySQLConnection(connection, text_query, [inputQueryParams.year, inputQueryParams.program_number ? inputQueryParams.program_number : inputQueryParams.channel_number]),
    errRead     => reject(errRead.toString())
  )
  .then(
    results     => resolve(JSON.stringify(results)),
    errQuery    => reject(errQuery.toString())
  )		
}