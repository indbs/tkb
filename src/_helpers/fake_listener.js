export function requestDataService(){
  const requestOptions = {
    method: 'GET'
  };
  return fetch('https:\\localhost:8070', requestOptions).then(handleResponse);
}