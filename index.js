const app = "I don't do much."

kittens = [
  "Milo",
  "Otis",
  "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newArray = [...kittens]
  newArray.push(name)
  return newArray 
}

function prependKitten(name) {
  
}
