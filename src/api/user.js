import request from "@/utils/request";
import { weChatToken } from "@/config/settings";
export async function login(data) {
  return request({
    url: "/platform/auth/dummy-login",
    method: "post",
    data,
  });
}
export async function getWeChatInfo() {
  return request({
    url: "/wechat",
    method: "get",
    headers: {
      "wechat-token": weChatToken,
    },
  });
}
export async function weChatLogin(data) {
  return request({
    url: "/platform/auth/wechat-login",
    method: "post",
    data: data,
  });
}
export async function domainLogin(data) {
  return request({
    url: "/platform/auth/domain-login",
    method: "post",
    data: data,
  });
}
export function getInfo() {
  return request({
    url: "platform/auth/user",
    method: "get",
  });
}
