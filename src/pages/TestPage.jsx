import { useNavigate } from "react-router-dom";
import { createTestResult } from "../api/testResults";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";

const TestPage = ({ user }) => {
  const { userId, nickname } = user;
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      id: userId,
      nickname: nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };
  return (
    <div>
      <h1 className="text-2xl m-8 font-bold text-center">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
