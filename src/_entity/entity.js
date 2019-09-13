//Шаблон одной слуйчаной сущности
export const fixedOrderedEntity = {
  ID: 'Entity 4',
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

//Упорядоченная последовательность из 20-ти сущностей
//TODO реализовать неупорядоченную последовательность
export function buildOrderedRandomEntitySequence(){
  var entitySequence = [];
  for(var i=1; i<21; i++){
    entitySequence.push(buildRandomEntity('Параметр ', i));
  }
  return entitySequence;
}

//Сущность с набором случайных параметров
export function buildRandomEntity(parameterName = 'Параметр ', entityNumber){
  var entity = {};
  entity['ID'] = 'Entity ' + entityNumber;
  for(var i=1; i<21; i++){
    entity[parameterName + i] = randomSignedFloat(-1, 1);
  }
  return entity;
}

function randomSignedFloat(min, max){
  return Math.random() * (max - min) + min;
}

function randomSignedInteger(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}