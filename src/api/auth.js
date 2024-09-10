import axios from "axios";

export const API_URL = "https://moneyfulpublicpolicy.co.kr";

//회원가입
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, {
    id: userData.id,
    password: userData.password,
    nickname: userData.nickname,
  });
  return response.data;
};

//로그인
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, {
    id: userData.id,
    password: userData.password,
  });
  return response.data;
};

// 회원정보 조회
export const getUserProfile = async ({ accessToken }) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

//프로필 수정
export const updateProfile = async (formData) => {
  const { accessToken, nickname } = formData;
  console.log("accessToken", accessToken);
  console.log("nickname", nickname);

  const response = await axios.patch(
    `${API_URL}/profile`,
    { nickname: nickname },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.data.success) {
    alert("프로필이 업데이트 되었습니다.");
  }
  if (response.data.error) {
    alert("프로필 업데이트에 실패했습니다.");
  }
  return response.data;
};
