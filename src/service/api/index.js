import Axios from "axios";
import setAuthToken from "../setAuthToken";
import config from "./config";

export const getApi = async (action) => {
  try {
    setAuthToken(localStorage.getItem("auth_token"));
    const response = await Axios.get(`${config.serverURL}${action}`);
    return {
      data: response.data,
      isSuccess: true,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      isSuccess: false,
      status: null,
    };
  }
};

export const postApi = async (action, data) => {
  try {
    setAuthToken(localStorage.getItem("auth_token"));
    const response = await Axios.post(`${config.serverURL}${action}`, data);
    return {
      data: response.data,
      isSuccess: true,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      isSuccess: false,
      status: null,
    };
  }
};

export const putApi = async (action, data) => {
  try {
    setAuthToken(localStorage.getItem("auth_token"));
    const response = await Axios.put(`${config.serverURL}${action}`, data);
    return {
      data: response.data,
      isSuccess: true,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      isSuccess: false,
      status: null,
    };
  }
};

export const postFormData = async (action, file) => {
  try {
    setAuthToken(localStorage.getItem("auth_token"));
    let formData = new FormData();
    formData.append("image", file);
    const response = await Axios.post(
      `${config.serverURL}${action}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return {
      data: response.data,
      isSuccess: true,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      isSuccess: false,
      status: null,
    };
  }
};
