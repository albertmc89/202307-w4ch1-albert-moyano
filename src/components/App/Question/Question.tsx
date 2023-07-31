import { QuestionStructure } from "../../../types";

const Question = ({ questionText }: QuestionStructure) => {
  return (
    <div className="options">
      <span className="options__question">{questionText}</span>
      <div className="options__answers"></div>
    </div>
  );
};

export default Question;
