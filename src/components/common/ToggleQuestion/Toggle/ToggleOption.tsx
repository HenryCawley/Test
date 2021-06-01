import classes from './ToggleOption.module.css';

type TextProps = {
    label: string,
    selected: boolean,
    onClick: () => void,
    textColor: string;
    toggleLock: boolean;
};

function AnswerSelected(props:TextProps) {
  console.log(props.toggleLock)
  return (
    <button
      className={classes.Option}
      style={{color:`
      ${props.selected
        ? props.textColor
        : ''
      }`}}
      onClick={() => props.onClick()}

      //COMMENTED OUT CODE FOR ATTEMPTING TO LOCK THE TOGGLE
      //onClick={`{
      //${props.toggleLock === true
      //  ? ''
      //  : () => props.onClick()
      //}}`}

    >
      {props.label}
    </button>
  );
}

export default AnswerSelected;
