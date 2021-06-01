import classes from './Question.module.css';

interface QuestionProp {
  question: string;
};

function Question(props:QuestionProp) {
  return (
      <div className={classes.Question}>
        {props.question}
      </div>
  );
}

export default Question;
