import   fetch                      from 'node-fetch';

export function requestDataService(address){
  const requestOptions = {
    method: 'GET'
  };
  return fetch(address, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          return Promise.reject(data);
      }
      return data;
  });
}