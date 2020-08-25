var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(Milo){
  return kittens.push(Milo)
}
function destructivelyPrependKitten(Milo){
  return kittens.unshift(Milo)
}
function destructivelyRemoveLastKitten(Garfield){
  return kittens.pop(Garfield)
}
