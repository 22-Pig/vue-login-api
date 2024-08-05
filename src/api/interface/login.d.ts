declare namespace Login {
  // 账号密码登录
  interface ReqLoginForm {
    username: string;
    password: string;
  }
  interface ResLogin {
    accessToken: string;
    refreshToken: string;
  }
  interface ResUserinfo {
    username: string;
  }
}
