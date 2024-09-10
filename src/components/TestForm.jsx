import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
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
    <div>
      <form onSubmit={TestSubmit} className="grid gap-4 text-center ">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className="border border-gray-300 rounded-lg w-1/2 m-auto p-4"
          >
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
        <button
          type="submit"
          className="p-4 bg-blue-200 rounded-lg w-1/2 m-auto mb-8 mt-8"
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default TestForm;
