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
  </v-flexible-container>
</template>

<script lang="ts" setup>
import { vFlexibleContainer } from "../layouts";
import { getApplicationConfiguration } from "../../lib";
import { computed, useSlots } from "vue";
import { useDefaultLogWriter } from "@dnvue/composition-api";

const logWriter = useDefaultLogWriter();

const showRightContainer = computed<boolean>(() => {
  const slots = useSlots();
  const visible = slots.right !== null && slots.right !== undefined;

  if (!visible) logWriter.writeWarning({ message: "未能找到 “right-slot”，因此隐藏。" });

  return visible;
});

const emits = defineEmits({
  /**
   * 应用 LOGO 图片单击事件。
   */
  "logo-click": () => {
    return true;
  },
});

function onLogoImageClick() {
  emits("logo-click");
}
</script>
