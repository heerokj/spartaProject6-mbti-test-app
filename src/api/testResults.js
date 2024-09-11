import { baseTestInstance } from "../axiosInstance/base";

export const getTestResults = async () => {
  const response = await baseTestInstance.get();
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await baseTestInstance.post({
    date: resultData.date,
    id: resultData.id,
    nickname: resultData.nickname,
    result: resultData.result,
    visibility: resultData.visibility,
  });
  return response;
};

export const deleteTestResult = async (id) => {
  const response = await baseTestInstance.delete(`/${id}`);
  console.log("response", response);

  return response;
};

// export const updateTestResultVisibility = async (id, visibility) => {};
