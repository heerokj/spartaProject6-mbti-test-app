import { useNavigate } from "react-router-dom";
import { createTestResult } from "../api/testResults";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";

const TestPage = ({ user }) => {
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      id: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };
  return (
    <>
      <h1>MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </>
  );
};

export default TestPage;
