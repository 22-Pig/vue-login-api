<template>
  <div class="login-container">
    <div class="login-form">
      <el-link :underline="false">账户密码登录</el-link>
      <el-form ref="formRef" :model="form" :rules="rules" size="large" @submit.prevent>
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="账户">
            <template #prefix>
              <el-icon class="el-input__icon">
                <user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码" show-password>
            <template #prefix>
              <el-icon class="el-input__icon">
                <lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="login-btn">
        <el-button size="large" type="primary" :loading="loading" @click="login()">
          <span class="login-btn__text">登 录</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { getTimeState } from "@/utils";
import { ElNotification } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { useUserStore } from "@/stores/modules/user";

const router = useRouter();
const userStore = useUserStore();

const formRef = ref();
const rules = reactive({
  username: [{ required: true, message: "请输入账户", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const loading = ref(false);
const form = reactive<Login.ReqLoginForm>({
  username: "",
  password: "",
});
//TODO
const login = async () => {
  const { username, password } = form;
  const params = {
    username,
    password,
  };
  // const test = form.username;
  const { data } = await loginApi(params);
  console.log(data);
  userStore.setToken(data.accessToken);
  router.replace("/homepage");
};
</script>

<style scoped lang="scss">
@import "./index";
</style>
