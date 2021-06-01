import classes from './ToggleOption.module.css';

type TextProps = {
    label: string,
    selected: boolean,
    onClick: () => void,
    textColor: string;
};

function AnswerSelected(props:TextProps) {
  return (
    <button
      className={classes.Option}
      style={{color:`
      ${props.selected
        ? props.textColor
        : ''
      }`}}
      onClick={() => props.onClick()}
    >
      {props.label}
    </button>
  );
}

export default AnswerSelected;
