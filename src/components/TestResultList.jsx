import React from "react";

const TestResultList = ({ results, user, onUpdate, onDelete }) => {
  console.log("results==>", results);
  console.log("user==>", user);
  console.log("onUpdate==>", onUpdate);
  console.log("onDelete==>", onDelete);

  return (
    <div>
      {results.length > 0 ? (
        results.map((result) => {
          return (
            <div key={result.id}>
              <div>
                <h1>{result.id}</h1>
                <span>{result.date}</span>
              </div>
              <div>
                <h2>{result.result}</h2>
                <span>{result.description}</span>
              </div>
            </div>
          );
        })
      ) : (
        <p>결과를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default TestResultList;
