<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div class="v-flexbox" :style="{ flexDirection: direction, flexWrap: wrap, justifyContent, alignItems }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { DnvueComponentProps } from "../component-props";

type FlexboxAlignment = "flex-start" | "center" | "flex-end";

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个字符串，用于表示 Flexbox 主轴方向。
     *
     * @type {string}
     */
    direction: {
      type: String as PropType<"row" | "row-reverse" | "column" | "column-reverse">,
      default: "row",
    },
    /**
     * 设置或获取一个字符串，用于表示主轴换行方式。
     *
     * @type {string}
     */
    wrap: {
      type: String as PropType<"nowrap" | "wrap" | "wrap-reverse">,
      default: "nowrap",
    },
    /**
     * 设置或获取一个字符串，用于表示元素主轴对齐方式。
     *
     * @type {string}
     */
    justifyContent: {
      type: String as PropType<FlexboxAlignment | ("space-between" | "space-around")>,
      default: "flex-start",
    },
    /**
     * 设置或获取一个字符串，用于表示元素交叉轴对齐方式。
     *
     * @type {string}
     */
    alignItems: {
      type: String as PropType<FlexboxAlignment | ("baseline" | "stretch")>,
      default: "flex-start",
    },
  })
);
</script>
