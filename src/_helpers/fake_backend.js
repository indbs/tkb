import { buildOrderedEntity }     from '../_entity/entity.js'
import { createServer } 			    from 'http';

export function talkingToFakeBackendService(requestType = 'on') {
  if (requestType == 'on') 
    return Promise.resolve(handleResponse(true));
  if (requestType == 'off') 
    return Promise.reject(handleResponse(false));
}

function handleResponse(ok = true){
  if (ok)   return {ok: ok,   result: JSON.stringify(buildOrderedEntity())}
  if (!ok)  return {ok: !ok,  result: 'service unnavailable'}
}

createServer(function (req, res) {
  console.log('connected');
  talkingToFakeBackendService('on')
  .then(
    result  =>  writeAnswer(res, 200, result, 'application/json'),
    error   =>  writeAnswer(res, 400, error,  'text/html'),
  )
}).listen(8070);

function writeAnswer(res, responseCode, responseResult, responseType){
	res.writeHead(responseCode, {'Content-Type': responseType});
	res.end(responseResult.result);
}