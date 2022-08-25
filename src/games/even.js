import { getRandomNumber } from '../utilities.js';
import { roundsNumber, startGameRound } from '../index.js';

const startEvenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  let roundsCounter = 0;
  const roundData = [];
  const getRoundData = () => {
    while (roundsCounter < roundsNumber) {
      const number = getRandomNumber();

      const question = `${number}`;

      let correctAnswer;
      if (number % 2 === 0) {
        correctAnswer = 'yes';
      } else {
        correctAnswer = 'no';
      }
      roundData.push([question, correctAnswer]);
      roundsCounter += 1;
    }
    return roundData;
  };
  startGameRound(getRoundData(), gameRules);
};

export default startEvenGame;
