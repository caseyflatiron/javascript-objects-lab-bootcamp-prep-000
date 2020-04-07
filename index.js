var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value) {
  console.log('value: ', value)
  var object = Object.assign({}, obj)
  object[key] = value
  return object
}

function deleteFromObjectByKey(obj, key) {
  var object = Object.assign({}, obj)
  delete object[key];
  return object
}


function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj
}

function deleteFromObjectByKey(obj, key){
  var object = Object.assign({},obj)
  console.log(object);
  delete object.key
  console.log(object);
  return object
}

function updateObjectWithKeyAndValue(obj, key, value) {
  var object = Object.assign({}, obj)
  object[key]=value
  return object
}
