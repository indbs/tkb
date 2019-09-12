import { createServer } 																from 'http';
import { parse } 																				from 'url';
import { createMySQLConnection,
         makeMySQLConnection } 			                    from '../_db/connection.js';
import { selectOneEntityFromDB,
         selectAllEntitiesFromDB } 			                from '../_db/manipulations.js';
import { mySQL_userConstants,
         appPorts }                                     from '../_constants/constants.js';

createServer(function (req, res) {
	console.log('user connected');
  const userData ={
    user:     mySQL_userConstants.user_extractor,
    password: mySQL_userConstants.password_extractor,
  }
  var connection = createMySQLConnection(userData);
  var inputQueryParams = parse(req.url, true).query;

  makeMySQLConnection(connection)
  .then(
    ()    => {
      //Проверка на передачу параметров в запросе
      if ((Object.keys(inputQueryParams)[0])&&(inputQueryParams[Object.keys(inputQueryParams)[0]])){
        //Проверка на передачу целого числа в качестве номера желаемой сущности
        if ((Object.keys(inputQueryParams)[0] == 'Entity')&&(Number.isInteger(parseInt(inputQueryParams[Object.keys(inputQueryParams)[0]])))){
          selectOneEntityFromDB(inputQueryParams[Object.keys(inputQueryParams)[0]], connection)
          .then(result => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(result);
          },
          error => console.log(error)
          )
        }
      }
      else{
        selectAllEntitiesFromDB(connection)
        .then(result => {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(result);
        },
        error => console.log(error)
        )
      }
    },
    error => console.log(error)
  )

}).listen(appPorts.client_request_port);