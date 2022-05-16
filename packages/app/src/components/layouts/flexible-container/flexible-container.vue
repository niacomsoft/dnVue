<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div class="v-flexible-container" :style="inlineStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
/// <reference path="../../../components.d.ts" />

import { defineProps, computed, PropType } from "vue";

const props = defineProps({
  /**
   * 设置或获取一个值，用于表示启用列模式方向。
   *
   * @property {boolean}
   */
  columnMode: {
    type: Boolean,
    default: false,
  },
  /**
   * 设置或获取一个值，用于表示翻转主轴方向。
   *
   * @property {boolean}
   */
  reverse: {
    type: Boolean,
    default: false,
  },
  /**
   * 设置或获取一个字符串，用于表示 flex justify-content 样式。
   * 
   * @property {string}
   */
  justifyContent: {
    type: String as PropType<FlexibleContainerJustifyContentAlignment>,
    default: "flex-start",
  },
  /**
   * 设置或获取一个字符串，用于表示 flex align-items 样式。
   * 
   * @property {string}
   */
  alignItems: {
    type: String as PropType<FlexibleContainerAlignItemsAlignment>,
    default: "flex-start",
  },
});

const inlineStyle = computed(() => {
  let direction: string = "row";
  if (props.columnMode) direction = "column";
  if (props.reverse) direction = `${direction}-reverse`;

  return {
    flexDirection: direction,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
  };
});
</script>
