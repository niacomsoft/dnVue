<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div class="v-flexible-container" :style="inlineStyle"></div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

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
});

const inlineStyle = computed(() => {
  let direction: string = "row";
  if (props.columnMode) direction = "column";
  if (props.reverse) direction = `${direction}-reverse`;

  return {
    flexDirection: direction,
  };
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { ComponentBase } from "../../abstracts";

export default defineComponent({
  extends: ComponentBase,
});
</script>
