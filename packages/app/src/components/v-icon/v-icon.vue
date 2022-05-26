<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <i v-if="readonlyClassName !== null" class="mdi" :class="readonlyClassName" :data-v-clickable="!isDisabled && clickable" :style="{ fontSize: readonlySize, color }" @click="onIconClick" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { DnvueComponentProps } from "../component-props";
import { paramCase } from "change-case";
import { DnvueComponentEvents } from "../component-events";

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个值，用于表示是否允许点击。
     *
     * @type {boolean}
     */
    clickable: {
      type: Boolean,
      default: true,
    },
    /**
     * 设置或获取一个值或字符串，用于表示图标大小。
     *
     * @type {string | number}
     */
    size: {
      type: [String, Number],
      default: "var(--v-text-size--nm)",
    },
    /**
     * 设置或获取一个字符串，用于表示图标颜色。
     *
     * @type {string}
     */
    color: {
      type: String,
      default: "var(--v-icon--default-color)",
    },
    /**
     * 设置或获取一个字符串，用于表示图标名称。
     *
     * @type {string}
     */
    name: {
      type: String,
      default: null,
    },
  })
);

const emits = defineEmits(Object.assign({}, DnvueComponentEvents, {}));

/**
 * 获取一个字符串，用于表示图标大小。
 *
 * @readonly
 * @type {string}
 */
const readonlySize = computed<string>(() => {
  if (typeof props.size === "number") return `${props.size}px`;
  return props.size;
});

/**
 * 获取一个字符串，用于表示图标类名称。
 *
 * @readonly
 * @type {string}
 */
const readonlyClassName = computed<string | null>(() => {
  if (String.isNullOrWhitespace(props.name)) return null;
  return paramCase(props.name.trim());
});

/**
 * 图标单击事件处理方法。
 */
function onIconClick() {
  if (props.clickable && !props.isDisabled) emits("click");
}
</script>
