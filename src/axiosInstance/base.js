import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export default baseInstance;
