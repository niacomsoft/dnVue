<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <i class="v-md-icon mdi" :class="iconClsName" :style="inlineStyle" />
</template>

<script lang="ts" setup>
/// <reference types="@dnvue/typings" />

import { computed } from "vue";
import { paramCase } from "change-case";

const props = defineProps({
  /**
   * 设置或获取一个字符串，用于表示 Material Design Icon 名称。
   *
   * @property {string}
   */
  name: {
    type: String,
    default: "mdiDotsHorizontal",
  },
  /**
   * 设置或获取一个值扩字符串，用于表示 Icon 大小。
   *
   * @property {number | string}
   */
  size: {
    type: [String, Number],
    default() {
      return "16px";
    },
  },
  /**
   * 设置或获取一个字符串，用于表示 Icon 颜色。
   *
   * @property {string}
   */
  color: {
    type: String,
    default: "#FFFFFF",
  },
  /**
   * 设置或获取一个值，用于表示是否禁用此组件。
   *
   * @property {boolean}
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits({
  click: () => {
    return true;
  },
});

const iconClsName = computed<string>(() => {
  return paramCase(props.name);
});

const inlineStyle = computed(() => {
  return {
    fontSize: typeof props.size === "number" ? `${props.size}px` : props.size,
    "--v-md-icon--color": props.disabled ? "--v-md-icon--color-disabled" : props.color,
  };
});

function onClick() {
  if (!props.disabled) emits("click");
}
</script>
