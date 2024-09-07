import axios from "axios";
import { useState } from "react";
import { API_URL } from "../api/auth";

const Profile = () => {
  const [nickname, setNickname] = useState();

  const modifyNickname = async (e) => {
    e.preventDefault();
    const userData = {
      nickname,
    };

    try {
      const response = await axios.patch(`${API_URL}/profile`, userData, {
        headers: {
          Authorization: "Bearer ",
        },
      });
      const data = response.data;
      if (data.success) {
        alert("프로필 업데이트 성공! 홈 페이지로 이동합니다.");
      }
    } catch (error) {
      console.log("프로필 업데이트 에러..", error);
    }
  };
  return (
    <div>
      <h1>프로필 수정</h1>
      <span>닉네임</span>
      <form onSubmit={modifyNickname}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            e.preventDefault();
            setNickname(e.target.value);
          }}
        />
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;
