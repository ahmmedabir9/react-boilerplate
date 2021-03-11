import { getApi, postApi, postFormData, putApi } from "./api/index";

//User
export const Registration = (data) => postApi("register", data);
export const Login = (data) => postApi("login", data);
export const GetUserProfile = (userID) => getApi(`user/profile/${userID}`);
export const UpdateuserProfile = (data) => putApi("user/profile", data);
export const UploadUserProfilePhoto = (file) =>
  postFormData("user/profilePhoto", file);
