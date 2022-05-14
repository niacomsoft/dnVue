<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div class="v-app" :style="overrideStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";

defineProps({
  /**
   * 设置或获取 Record<string, any> 类型的对象实例，用于表示可供重写的全局内联样式。
   *
   * @property {Object}
   */
  overrideStyle: {
    type: Object as PropType<Record<string, any>>,
    default() {
      return null;
    },
  },
});
</script>
