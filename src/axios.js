import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

// "https://mono-backend-accessement.herokuapp.com/"

export default instance;
