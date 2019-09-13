import { readMySQLQuery }           from '../_fs/readFile.js'
import { queryMySQLConnection,
         closeMySQLConnection }     from '../_db/connection.js'

export function insertEntitySequenceInDB(result, connection){
  console.log(result);
  return new Promise((resolve, reject) => {
    readMySQLQuery('./src/_requests/insert.sql')
    .then(
      text_query  => {      
        //Перебор 20-ти сущностей в ответе
        for(var j = 0; j < 20; j++){
          var resultArray = [];
          //Перебор 21 поля данных в каждой сущности: ID + 20 параметров 
          for(var i = 0; i < 21; i++){
            resultArray.push(result[j][Object.keys(result[j])[i]]);
          }
          //console.log(resultArray);
          queryMySQLConnection(connection, text_query, [...resultArray])
        }
        
      },
      errRead     => reject(errRead.toString())
    )
    .then(
      results     => {
        closeMySQLConnection(connection);
        resolve(JSON.stringify(results));
      },
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
      results     => {
        closeMySQLConnection(connection);
        resolve(JSON.stringify(results));
      },
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
      results     => {
        closeMySQLConnection(connection);
        resolve(JSON.stringify(results))
      },
      errQuery    => reject(errQuery.toString())
    )
  })
}