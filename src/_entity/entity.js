export const fixedOrderedEntity = {
  ID: '',
  'Параметр 1'  : 0.55,
  'Параметр 2'  : 0.13,
  'Параметр 3'  : 0.15,
  'Параметр 4'  : -0.13,
  'Параметр 5'  : 0.56,
  'Параметр 6'  : 0.27,
  'Параметр 7'  : -0.13,
  'Параметр 8'  : 0.3,
  'Параметр 9'  : 0.1,
  'Параметр 10' : 0.10,
  'Параметр 11' : 0.99,
  'Параметр 12' : 0.44,
  'Параметр 13' : 0.15,
  'Параметр 14' : -0.13,
  'Параметр 15' : 0.56,
  'Параметр 16' : -0.33,
  'Параметр 17' : -0.13,
  'Параметр 18' : 0.3,
  'Параметр 19' : 0.1,
  'Параметр 20' : 0.60,
};

export function buildOrderedEntity(parameterName = 'Параметр '){
  var entity = {};
  entity['ID'] = 'id string';
  for(i=1; i<21; i++){
    entity[parameterName + i] = Math.random(10)/10
  }
  return entity;
}

export function disorderEntity(entity = {}){

}