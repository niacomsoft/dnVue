<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexible-container class="v-top-banner" align-items="center" justify-content="space-between">
    <v-flexible-container data-role="topbanner-logo" align-items="center">
      <img src="../../assets/icons/dnvue-128x128.png" @click="onLogoImageClick" />
      <span>{{ $t("APPLICATION_NAME") }}</span>
    </v-flexible-container>
    <v-flexible-container v-if="showRightContainer" data-role="topbanner-right-container" align-items="center" justify-content="flex-end">
      <slot name="right" />
    </v-flexible-container>

    <!--应用清单抽屉-->
    <el-drawer custom-class="el-drawer-extensions" size="300px" append-to-body v-model="drawerVisible" direction="ltr" :show-close="false">
      <template #title>
        <slot name="drawer-header" />
        <v-top-banner-header v-if="useDefaultDrawerHeader" />
      </template>
      <slot name="drawer-body" />
      <v-top-banner-body v-if="useDefaultDrawerBody" />
    </el-drawer>
  </v-flexible-container>
</template>

<script lang="ts" setup>
import { vFlexibleContainer } from "../layouts";
import { getApplicationConfiguration } from "../../lib";
import { computed, ref, useSlots } from "vue";
import { useDefaultLogWriter } from "@dnvue/composition-api";
import vTopBannerHeader from "./top-banner-header.vue";
import vTopBannerBody from "./top-banner-body.vue";

const logWriter = useDefaultLogWriter();
const slots = useSlots();

const showRightContainer = computed<boolean>(() => {
  const visible = slots.right !== null && slots.right !== undefined;

  if (!visible) logWriter.writeWarning({ message: "未能找到 “right-slot”，因此隐藏。" });

  return visible;
});

const useDefaultDrawerHeader = computed<boolean>(() => {
  return slots["drawer-header"] === null || slots["drawer-header"] === undefined;
});

const useDefaultDrawerBody = computed<boolean>(() => {
  return slots["drawer-body"] === null || slots["drawer-body"] === undefined;
});

const props = defineProps({
  /**
   * 设置或获取一个值，用于表示禁用默认的 "logo-click" 事件。
   */
  disabledLogoClickEvent: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits({
  /**
   * 应用 LOGO 图片单击事件。
   */
  "logo-click": () => {
    return true;
  },
});

/**
 * 是否显示应用应用清单抽屉。
 */
const drawerVisible = ref<boolean>(false);

function onLogoImageClick() {
  if (props.disabledLogoClickEvent) emits("logo-click");
  else {
    drawerVisible.value = true;
  }
}
</script>
