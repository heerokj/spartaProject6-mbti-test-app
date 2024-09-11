import axios from "axios";

export const baseInstance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

// https://relieved-uncovered-kingfisher.glitch.me
export const baseTestInstance = axios.create({
  baseURL: "http://localhost:5000/testResults",
});
