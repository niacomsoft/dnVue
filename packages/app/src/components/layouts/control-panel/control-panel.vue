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
    <div data-role="footer-placeholder">
      <slot name="footer" />
    </div>
  </v-flexible-container>
</template>

<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { vFlexibleContainer } from "../flexible-container";

const slots = useSlots();

const showHeaderSlot = computed<boolean>(() => {
  return slots.header !== null && slots.header !== undefined;
});

const showFooterSlot = computed<boolean>(() => {
  return slots.footer !== null && slots.footer !== undefined;
});
</script>
