import { requestTimeConstants, 
         appPorts}                  from '../_constants/constants.js';
import { createMySQLConnection,
         makeMySQLConnection } 			from '../_db/connection.js';
import { insertRowInDB } 			      from '../_db/manipulations.js';
import { mySQL_userConstants }      from '../_constants/constants.js';
import { requestDataService }       from '../_common/requestDataService.js';

fake_listener();

function fake_listener(){
  setInterval(() => {
    requestDataService('http://localhost:' + appPorts.fake_listen_port)
    .then(
      result => collectResults(result),
      error =>  console.log(error))
  }, requestTimeConstants.development)            
}

function collectResults(result){
  const userData ={
    user:     mySQL_userConstants.user_listener,
    password: mySQL_userConstants.password_listener,
  }
  var connection = createMySQLConnection(userData);
  makeMySQLConnection(connection)
  .then(
    ()    => insertRowInDB(result, connection),
		error => console.log(error)
  )
}