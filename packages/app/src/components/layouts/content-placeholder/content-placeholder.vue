<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexible-container class="v-content-placeholder">
    <div data-role="appmanifest-shortcuts" v-if="showAppShortcuts"></div>
  </v-flexible-container>
</template>

<script lang="ts" setup>
import { vFlexibleContainer } from "../flexible-container";

const props = defineProps({
  /**
   * 设置或获取一个值，用于表示是否显示应用快捷方式菜单条。
   */
  showAppShortcuts: {
    type: Boolean,
    default: true,
  },
});
</script>
