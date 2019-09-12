import { requestTimeConstants }     from '../_constants/constants.js'
import   fetch                      from 'node-fetch'
import { createMySQLConnection,
         makeMySQLConnection } 			from '../_db/connection.js';
import { insertRowInDB } 			      from '../_db/manipulations.js';

fake_listener();

function fake_listener(){
  console.log('go');
  setInterval(() => {
    requestDataService()
    .then(
      result => collectResults(result),
      error =>  console.log(error))
  }, requestTimeConstants.development)            
}

function requestDataService(){
  const requestOptions = {
    method: 'GET'
  };
  return fetch('http://localhost:8070', requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          return Promise.reject(data);
      }
      console.log('returning');
      return data;
  });
}

function collectResults(result){
  var connection = createMySQLConnection();
  makeMySQLConnection(connection)
  .then(
    ()    => {
      console.log(result);
      insertRowInDB(result, connection)
    },
		error => console.log(error)
  )
}