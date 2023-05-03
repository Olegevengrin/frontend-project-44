import { getRandomNumber } from "../util.js";
import start from "../index.js"

const task = "Find the greatest common divisor of given numbers."
const minRange = 1
const maxRange = 25

const getGCD = (x, y) => (y=== 0 ? x : getGCD(y, x % y))

const startRound = () => {
    const num1 = getRandomNumber(minRange, maxRange)
    const num2 = getRandomNumber(minRange, maxRange)
    const whichResult = `${num1} ${num2}`
    const isAnswer = getGCD(num1, num2).toString()
    return [whichResult, isAnswer]
    
}

export default () => {
    start(task, startRound)
}