<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox direction="column" class="animate__animated animate__fadeIn v-content-container">
    <v-flexbox align-items="center" justify-content="space-between" data-v-role="header" v-if="readonlyHeaderSlotVisible">
      <span>{{ title }}</span>
      <slot name="header" />
    </v-flexbox>
    <div data-v-role="operation" v-if="readonlyOperationSlotVisible">
      <slot name="operation" />
    </div>
    <div data-v-role="content">
      <slot />
    </div>
    <div data-v-role="footer" v-if="readonlyFooterSlotVisible">
        <slot name="footer" />
    </div>
  </v-flexbox>
</template>

<script lang="ts" setup>
import { vFlexbox } from "../v-flexbox";
import { DnvueComponentProps } from "../component-props";
import { computed, useSlots } from "vue";

const slots = useSlots();

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个字符串，用于表示标题文本。
     */
    title: {
      type: String,
      default: "",
    },
  })
);

const readonlyHeaderSlotVisible = computed<boolean>(() => {
  return !String.isNullOrWhitespace(props.title) || (slots["header"] !== null && slots["header"] !== undefined);
});

const readonlyOperationSlotVisible = computed<boolean>(() => {
  return slots["operation"] !== null && slots["operation"] !== undefined;
});

const readonlyFooterSlotVisible = computed<boolean>(() => {
  return slots["footer"] !== null && slots["footer"] !== undefined;
});
</script>
