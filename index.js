var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  console.log('value: ', val)
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(obj, key, val) {
  console.log('value: ', val)
  var object = Object.assign({}, obj)
  object[key] = val
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
  delete obj.key
  return obj  
}

function updateObjectWithKeyAndValue(obj, key, val) {
  var object = Object.assign({}, obj)
  object[key]=value
  return object
}
