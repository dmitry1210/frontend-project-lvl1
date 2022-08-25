import { getRandomNumber100, getNOD } from '../utilities.js';
import { roundsNumber, gameRound } from '../index.js';

const startGCDGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  let roundsCounter = 0;
  const roundData = [];
  const getRoundData = () => {
    while (roundsCounter < roundsNumber) {
      const number1 = getRandomNumber100();
      const number2 = getRandomNumber100();

      const question = `${number1} ${number2}`;

      const correctAnswer = getNOD(number1, number2);

      roundData.push([question, correctAnswer]);
      roundsCounter += 1;
    }
    return roundData;
  };
  gameRound(getRoundData(), gameRules);
};

export default startGCDGame;
