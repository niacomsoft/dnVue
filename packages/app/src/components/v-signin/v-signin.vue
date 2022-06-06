<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div class="v-signin" v-loading="inProcessing" :element-loading-text="$t('AUTHENTICATION_IN_PROGRESS')">
    <div class="v-signin-container" :shadow="shadow">
      <v-flexbox align-items="center">
        <span data-v-role="title">{{ $t("SIGN_IN") }}</span>
      </v-flexbox>
      <v-flexbox>
        <el-input v-model="observableTyped.userName" :placeholder="$t('ENTER_USERNAME')" clearable :maxlength="64" />
      </v-flexbox>
      <v-flexbox>
        <el-input v-model="observableTyped.password" :placeholder="$t('ENTER_PASSWORD')" type="password" clearable show-password :maxlength="32" />
      </v-flexbox>
      <v-flexbox>
        <el-checkbox v-model="observableTyped.remember" :label="$t('REMEMBER_ME')" :indeterminate="false" />
      </v-flexbox>
      <v-flexbox justify-content="flex-end">
        <el-button type="primary" class="mdi mdi-account-key-outline" @click="onSignInButtonClick">{{ $t("SIGN_IN") }}</el-button>
      </v-flexbox>
    </div>
  </div>
</template>

<script lang="ts" setup>
/// <reference path="../../global.d.ts" />

import { vFlexbox } from "../v-flexbox";
import { DnvueComponentProps } from "../component-props";
import { DnvueComponentEvents } from "../component-events";
import { reactive } from "vue";
import { IBasicCredentials } from "@dnvue/http-authen";

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个值，用于表示是否显示阴影。
     *
     * @type {boolean}
     */
    shadow: {
      type: Boolean,
      default: true,
    },
  })
);

const events = defineEmits(
  Object.assign({}, DnvueComponentEvents, {
    /**
     * 登录事件。
     */
    signin: (e: dnvue.ui.SignInEventArgs) => {
      return e !== undefined && e !== null;
    },
  })
);

const observableTyped = reactive({
  userName: "",
  password: "",
  remember: true,
});

function onSignInButtonClick() {
  events("signin", { userName: observableTyped.userName, password: observableTyped.password, rememberCredentials: observableTyped.remember });
}
</script>
