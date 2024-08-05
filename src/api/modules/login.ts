import http from "@/api";
import { SYS } from "@/api/config/servicePort";

/**
 * @name 登录模块
 */
// TODO 账号密码登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(SYS + `/auth/login`, params)

};
export const userInfoApi = () => {
  return http.get<Login.ResUserinfo>(SYS + `/auth/`)

};
