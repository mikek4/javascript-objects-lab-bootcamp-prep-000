var recipes = {};

function updateObjectWithKeyandValue (recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}
