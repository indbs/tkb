import { readMySQLQuery }           from '../_fs/readFile.js'
import { queryMySQLConnection }     from '../_db/connection.js'

export function insertRowInDB(result, connection){
  return new Promise((resolve, reject) => {
    var resultArray = [];
    for(var i=1; i<21; i++){
      resultArray.push(result[Object.keys(result)[i]]);
    }
    console.log(resultArray);
    readMySQLQuery('./src/_requests/insert.sql')
    .then(
      text_query  => queryMySQLConnection(connection, text_query, [result.ID, ...resultArray]),
      errRead     => reject(errRead.toString())
    )
    .then(
      results     => resolve(JSON.stringify(results)),
      errQuery    => reject(errQuery.toString())
    )
  })
}

export function selectOneEntityFromDB(entityNumber, connection){
  return new Promise((resolve, reject) => {
    readMySQLQuery('./src/_requests/selectOneEntity.sql')
    .then(
      text_query  => queryMySQLConnection(connection, text_query, entityNumber),
      errRead     => reject(errRead.toString())
    )
    .then(
      results     => resolve(JSON.stringify(results)),
      errQuery    => reject(errQuery.toString())
    )
  })
}

export function selectAllEntitiesFromDB(connection){
  return new Promise((resolve, reject) => {
    readMySQLQuery('./src/_requests/selectAllEntities.sql')
    .then(
      text_query  => queryMySQLConnection(connection, text_query),
      errRead     => reject(errRead.toString())
    )
    .then(
      results     => resolve(JSON.stringify(results)),
      errQuery    => reject(errQuery.toString())
    )
  })
}