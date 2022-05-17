<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexible-container column-mode class="v-control-panel">
    <div data-role="header-placeholder" v-if="showHeaderSlot">
      <slot name="header" />
    </div>
    <div data-role="content-placeholder">
      <slot />
    </div>
    <div data-role="footer-placeholder" v-if="showFooterSlot">
      <slot name="footer" />
    </div>
  </v-flexible-container>
</template>

<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { vFlexibleContainer } from "../flexible-container";
import { useDefaultLogWriter } from "@dnvue/composition-api";

const logWriter = useDefaultLogWriter();

const slots = useSlots();

const showHeaderSlot = computed<boolean>(() => {
  const visible:boolean = slots.header !== null && slots.header !== undefined;

  if (!visible) logWriter.writeWarning({ message: "未能找到 'header-slot'，因此隐藏。" });

  return visible;
});

const showFooterSlot = computed<boolean>(() => {
  const visible:boolean = slots.footer !== null && slots.footer !== undefined;

  if (!visible) logWriter.writeWarning({ message: "未能找到 'footer-slot'，因此隐藏。" });

  return visible;
});
</script>
