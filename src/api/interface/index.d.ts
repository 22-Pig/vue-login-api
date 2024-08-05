// 请求响应参数（不包含data）
interface Result {
  code: string;
  msg: string;
}

// 请求响应参数（包含data）
interface ResultData<T = any> extends Result {
  data: T;
}


