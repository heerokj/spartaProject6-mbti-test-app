import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(`${API_URL}`, {
    date: resultData.date,
    id: resultData.id,
    nickname: resultData.nickname,
    result: resultData.result,
    visibility: resultData.visibility,
  });
  return response;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response;
};

// export const updateTestResultVisibility = async (id, visibility) => {};
