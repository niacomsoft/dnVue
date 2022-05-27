<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FI】LE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox direction="column">
    <v-appbar :logo-image-url="readonlyLogoImage" :title="$t('APPLICATION_NAME')"></v-appbar>
    <v-app-manifest :title="$t('APPLICATION_MANIFEST')" />
  </v-flexbox>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { vFlexbox, vAppbar, vAppManifest } from "../../../components";

/**
 * 获取一个字符串，用于表示 LOGO 图片 URL。
 */
const readonlyLogoImage = computed(() => {
  return new URL("../../../assets/icons/dnvue-128x128.png", import.meta.url).href;
});
</script>
