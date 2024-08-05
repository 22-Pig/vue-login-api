<template>
  <h5>主页</h5>
  <h2>你好：{{ name }}</h2>
  <el-button @click="loginOut">登出</el-button>
</template>

<script setup lang="ts">
import { userInfoApi } from "@/api/modules/login";
import router from "@/routers";
import { useUserStore } from "@/stores/modules/user";
import { onMounted, ref } from "vue";
const userStore = useUserStore();

function loginOut() {
  userStore.setToken("");
  router.push("/login");
}
let name = ref("");

const fetchUsername = async () => {
  try {
    const res = await userInfoApi();
    // 检查返回的数据是否包含 username 字段
    if (res.data && res.data.username) {
      name.value = res.data.username;
      console.log(name.value);
    } else {
      console.error("返回的数据中没有找到 username 字段");
    }
  } catch (error) {
    console.error("获取用户信息时发生错误:", error);
    // 可以选择在这里显示友好的错误消息给用户，或者记录错误信息
  }
};

onMounted(() => {
  fetchUsername();
});
</script>

<style scoped lang="scss"></style>
