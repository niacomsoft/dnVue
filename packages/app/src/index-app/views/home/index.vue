<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox direction="column">
    <v-appbar :logo-image-url="readonlyLogoImage"></v-appbar>
  </v-flexbox>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { vFlexbox, vAppbar } from "../../../components";

/**
 * 获取一个字符串，用于表示 LOGO 图片 URL。
 */
const readonlyLogoImage = computed(() => {
  return new URL("../../../assets/icons/dnvue-128x128.png", import.meta.url).href;
});
</script>
