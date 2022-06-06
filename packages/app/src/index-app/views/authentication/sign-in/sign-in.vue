<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div class="animate__animated animate__flipInY">
    <v-signin :in-processing="inProcessing" @signin="onSignIn" />
  </div>
</template>

<script lang="ts" setup>
/// <reference path="../../../../global.d.ts" />

import { ref } from "vue";
import { vSignin } from "../../../../components";
import { useBasicAuthenticator, useNotification } from "../../../../lib";
import { SecureBasicCredentials } from "@dnvue/http-authen";

const inProcessing = ref<boolean>(false);

async function onSignIn(e: dnvue.ui.SignInEventArgs): Promise<void> {
  inProcessing.value = true;
  try {
    const authenticator = useBasicAuthenticator();
    const result = await authenticator.signinAsync(new SecureBasicCredentials(e.userName, e.password));
  } catch (error) {
    useNotification().warning((error as Error).message);
    inProcessing.value = false;
  }
}
</script>
