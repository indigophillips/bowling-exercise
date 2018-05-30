module.exports = {
  round1
}

let first = 0
let second = 0
let third = 0
let spare = 0
let strike = 0
let total = 0

const frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]

function round1 () {
  for (let i = 0; i < frames.length; i++) {
    first = frames[i][0]
    second = frames[i][1]
    if (frames[i] === 9) {
      finalRound()
    } else if (strike === 20) {
      total += (strike + first)
    } else if (strike === 10 && first !== 10) {
      (total += (strike + first + second))
    } else if (strike === 10 && first === 10) {
      strike = 20
    } else if (spare === 10) {
      (total += spare)
    } else if (first === 10) {
      strike += 10
    } else if (first + second === 10) {
      spare += 10
    } else {
      total += (first + second)
    }
  }
  return total
}

function finalRound () {
  first = frames[9][0]
  second = frames[9][1]
  third = frames[9][2]
  if (strike === 20) {
    total += (strike + first + second + third)
  } else if (strike === 10 && first !== 10) {
    (total += (strike + first + second + third))
  } else if (strike === 10 && first === 10) {
    strike = 20
  } else if (spare === 10) {
    (total += spare)
  } else if (first === 10) {
    strike += 10
  } else if (first + second === 10) {
    spare += 10
  } else {
    total += (first + second)
  }
}
