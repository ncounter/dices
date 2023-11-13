/**
 * OOP VERSION
 */

/* new Dice class */
// class Dice { constructor(size) { this.size = size  } }

/* collect dices */
// const dices = []

/* take dices sizes form command line */
// process.argv.forEach(arg => dices.push(new Dice(arg)))

/* for each dice, respecting its own size limit, pick a random value */
// dices.forEach(dice => {
//   const r = Math.floor(Math.random() * dice.size) + 1
//   console.log(r + '<=' + dice.size)
// })



/**
 * SIMPLE VERSION
 */

// every parameter from the command line is the size limit of each dice
// pick a random value from 1 to the size limit of each
process.argv.forEach(arg => {
  if (Number.parseInt(arg)) {
    setTimeout(() => console.log(Math.floor(Math.random() * arg) + 1), 1200 )
  }
})
