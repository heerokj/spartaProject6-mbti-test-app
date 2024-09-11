import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import { Link, useNavigate } from "react-router-dom";

const mbtiDescriptions = {
  ISTJ: "책임감 있고 신뢰할 수 있으며, 전통적이고 실용적인 사고방식을 가지고 있습니다.",
  ISFJ: "헌신적이고 따뜻하며, 사람들의 필요를 잘 이해하고 도와줍니다.",
  INFJ: "이상적이며 통찰력이 뛰어나고, 사람들과의 깊은 관계를 중요시합니다.",
  INTJ: "독립적이고 전략적이며, 높은 목표를 설정하고 달성하는 데 집중합니다.",
  ISTP: "문제 해결 능력이 뛰어나고, 상황에 맞게 유연하게 대처합니다.",
  ISFP: "예술적 감각이 뛰어나며, 감정 표현을 중요시합니다.",
  INFP: "이상적이고 창의적이며, 내면의 가치를 중요시합니다.",
  INTP: "논리적이고 분석적이며, 지적 호기심이 강합니다.",
  ESTP: "활동적이고 실용적이며, 순간의 기회를 포착하는 능력이 뛰어납니다.",
  ESFP: "사교적이고 쾌활하며, 현재의 순간을 즐깁니다.",
  ENFP: "열정적이고 창의적이며, 새로운 가능성을 탐구합니다.",
  ENTP: "논쟁을 즐기며, 창의적인 문제 해결 능력을 가지고 있습니다.",
  ESTJ: "체계적이고 효율적이며, 목표 달성에 집중합니다.",
  ESFJ: "사교적이고 따뜻하며, 다른 사람들의 감정을 잘 이해합니다.",
  ENFJ: "카리스마 있고 공감 능력이 뛰어나며, 사람들을 이끄는 데 탁월합니다.",
  ENTJ: "결단력 있고 목표 지향적이며, 리더십을 발휘합니다.",
};

const TestResultPage = ({ user }) => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  //테스트 결과 불러오기
  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };
  // 내 결과
  const myResult = results.filter((result) => {
    return result.id === user.userId;
  });

  const description =
    mbtiDescriptions[myResult[0]?.result] ||
    "MBTI 유형 설명을 찾을 수 없습니다.";

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h1 className="text-2xl m-8 font-bold text-center">테스트 결과</h1>
      <div className="w-1/2 m-auto bg-white p-8 rounded-lg grid">
        {myResult.length > 0 ? (
          <>
            <h1 className="text-xl font-bold mb-8">
              당신은 : {myResult[0].result}
            </h1>
            <span>{description}</span>
          </>
        ) : (
          <div className="text-center">
            <p>결과를 찾을 수 없습니다.. 테스트를 진행해주세요.</p>
            <Link to="/test">테스트로 이동하기 👉 테스트</Link>
          </div>
        )}
        <button
          onClick={() => {
            navigate("/resultsList", { state: { result: results } }); //결과 리스트
          }}
          className="p-4 bg-blue-200 w-full rounded-lg mt-6 "
        >
          결과 리스트 페이지로 이동하기
        </button>
      </div>
    </div>
  );
};

export default TestResultPage;
