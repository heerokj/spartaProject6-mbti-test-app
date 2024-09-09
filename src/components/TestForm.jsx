import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  //TODO - 질문하기
  //props로 줬는데 왜 빨간줄...? 무슨뜻??  props의 유형을 명시적으로 정의안해서??

  //길이가 questions.length인 빈 배열을 생성 &null로 초기화
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  //라디오버튼 선택했을때?
  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  //제출하기 버튼
  const TestSubmit = (e) => {
    e.preventDefault();
    //props로 받은 함수 실행
    onSubmit(answers);
  };
  return (
    <>
      <form onSubmit={TestSubmit}>
        {questions.map((q, index) => (
          <div key={q.id} className="mb-4">
            <p className="font-semibold">{q.question}</p>
            {q.options.map((option, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">제출하기</button>
      </form>
    </>
  );
};

export default TestForm;
