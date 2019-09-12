import { createConnection }                             from 'mysql';

export function createMySQLConnection(userData){
  var connection = createConnection({
    host                    : 'localhost',
    user                    :  userData.user,
    password                :  userData.password,
    database                : 'kiln',
    timezone                : 'Moscow',
    multipleStatements      :  true
  });
  return connection;
};

export function makeMySQLConnection(connection){
  return new Promise((resolve, reject) => {
    connection.connect(function(err) {
      if (err) reject(prepareAnswer(200, err.toString(), 'text/html'));
      resolve();
    });
  })
}

export function closeMySQLConnection(connection){
  connection.end();
};

export function queryMySQLConnection(connection, text_query, query_parameters){
  return new Promise((resolve, reject) => {
    connection.query(text_query, query_parameters, (errQuery, results) => {
      if (errQuery) reject(errQuery);
      else {
        closeMySQLConnection(connection)
        resolve(results)};
    })
  });
};