import classes from './Result.module.css';

interface ResultProp {
  result: string;
};

function Answer(props:ResultProp) {
  return (
      <div className={classes.Answer}>
        {props.result}
      </div>
  );
}

export default Answer;
