import Overlay from './Overlay';

import ToggleOption from './ToggleOption';

import classes from './ToggleContainer.module.css';

interface OptionProps {
  selectedIndex: number;
  values: string[];
  textColor:string;
  onSelect: (answerIndex: number) => void;

  //toggleLock: boolean;
};

function AnswerToggle(props:OptionProps) {
  console.log(props.toggleLock)
  return (
    <div className={classes.ToggleAnswer}>
        <Overlay
          selectedIndex={props.selectedIndex}
          valuesCount={props.values.length}
        />

      {props.values.map((value, index) => (
        <ToggleOption
          key={value}
          label={value}
          onClick={() => props.onSelect(index)}
          selected={props.selectedIndex === index}
          textColor={props.textColor}

          //toggleLock={props.toggleLock}
        />
      ))}
    </div>
  );
}

export default AnswerToggle;
