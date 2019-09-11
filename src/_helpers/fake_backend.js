import {buildOrderedEntity}    from '_entity/entity.js'

export function talkingToFakeBackendService(requestType = 'on') {
  if (requestType=='on') 
    return Promise.resolve(handleResponse(true));
  if (requestType=='off') 
    return Promise.reject(handleResponse(false));
}

function handleResponse(ok = true){
  if (ok) return {ok: ok, result: JSON.stringify(buildOrderedEntity())}
}