let dHundred = Array.from(Array(101).keys())

const shuffle = (array) => {
  let counter = array.length, temp, index

  while (counter > 0) {
    index = Math.floor(Math.random() * counter)
    counter--
    temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

dHundred.shift()
let shuffled = shuffle(dHundred).
