import React, { useState } from "react";

import Question from './Question/Question';
import ToggleContainer from './Toggle/ToggleContainer';
import Result from './Result/Result';

import classes from './ToggleQuestion.module.css';

function ToggleQuestionContainer() {

//Pass in data for the question
const data = {
  question:'Which of the following are mammals? ',
  options:[
      { key: 'animal set 1', values: ['Elephant', 'Option A'], answer: 'Elephant'},
      { key: 'animal set 2', values: ['Option B', 'Lion', 'Option C'], answer: 'Lion'},
      { key: 'animal set 3', values: ['Blue Whale', 'Option D'], answer: 'Blue Whale'},
  ],
};

    //Setting the state of the initial selected answers
    const [selectedIndices, setSelectedIndices] = useState<number[]>([1, 2, 1]);

    //const [toggleLock, setToggleLock] = useState(false);

    //Value for each HSL value for the background colour gradient
    const [primaryHue, setPrimaryHue] = useState(14);
    const [primarySaturation, setPrimarySaturation] = useState(93);
    const [primaryLightness, setPrimaryLightness] = useState(78);
    const [secondaryHue, setSecondaryHue] = useState(13);
    const [secondarySaturation, setSecondarySaturation] = useState(93);
    const [secondaryLightness, setSecondaryLightness] = useState(78);

    //value of the answer message 'The answer is incorrect.' and 'The answer is correct'
    const [resultMessage, setResultMessage] = useState('');

    function handleSelect(optionIndex:number, answerIndex: number) {
      const newIndices = [...selectedIndices];
      newIndices[optionIndex] = answerIndex;
      setSelectedIndices(newIndices);

      //Checking how many of the answers are correct and find out what percentage are correct
      const correctRate = data.options.filter((option, optionIndex) => {
        return option.answer === option.values[newIndices[optionIndex]]
      }).length / data.options.length;

      //Setting state for the background colour HSL values
      //This would benefit from being able to condense into a single state
      setPrimaryHue(correctRate === 1 ? 167 : (28 * correctRate));
      setPrimarySaturation(correctRate === 1 ? 74 : 93);
      setPrimaryLightness(correctRate === 1 ? 50 : 78);
      setSecondaryHue(correctRate === 1 ? 184 : (13 * correctRate));
      setSecondarySaturation(correctRate === 1 ? 94 : 93);
      setSecondaryLightness(correctRate === 1 ? 45 : 78);

      setResultMessage(correctRate === 1
        ? 'The answer is correct!'
        : 'The answer is incorrect.'
      );
  }


  return (
      <div className={classes.ToggleQuestionContainer} style={{
        background: `linear-gradient(to bottom,
          hsl(${primaryHue},
              ${primarySaturation}%,
              ${primaryLightness}%),
          hsl(${secondaryHue},
              ${secondarySaturation}%,
              ${secondaryLightness}%)`
      }}>
        <Question question={data.question}/>

        {data.options.map((option, optionIndex) => (
        <ToggleContainer
            key={option.key}
            onSelect={(answerIndex: number) => handleSelect(optionIndex, answerIndex)}
            values={option.values}
            textColor={`hsl(${primaryHue},${primarySaturation}%,${primaryLightness}%)`}
            selectedIndex={selectedIndices[optionIndex]}
        />
        ))}

        <Result result={`${resultMessage}`}/>
      </div>
  );
}

export default ToggleQuestionContainer;
