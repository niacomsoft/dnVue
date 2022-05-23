<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexible-container class="v-content-placeholder">
    <div data-role="appmanifest-shortcuts" v-if="showAppShortcuts">
      <v-short-cuts />
    </div>
    <div data-role="left-side" v-if="showSidebar">
      <slot name="sidebar" />
    </div>
    <div data-role="content">
      <slot />
    </div>
  </v-flexible-container>
</template>

<script lang="ts" setup>
import { useDefaultLogWriter } from "@dnvue/composition-api";
import { computed, useSlots } from "vue";
import { vFlexibleContainer } from "../flexible-container";
import vShortCuts from "./shortcuts.vue";

const slots = useSlots();
const logWriter = useDefaultLogWriter();

const props = defineProps({
  /**
   * 设置或获取一个值，用于表示是否显示应用快捷方式菜单条。
   */
  showAppShortcuts: {
    type: Boolean,
    default: true,
  },
  /**
   * 设置或获取一个值，用于表示激活的应用快捷方式索引数值。
   */
  activedAppShortcutIndex: {
    type: Number,
    default: 0,
  },
});

const showSidebar = computed<boolean>(() => {
  const visible = slots["side-bar"] !== null && slots["side-bar"] !== undefined;
  if (!visible) logWriter.writeWarning({ message: "未能找到 “side-bar”，因此隐藏。" });
  return visible;
});
</script>
