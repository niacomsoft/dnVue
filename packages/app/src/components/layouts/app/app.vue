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
/// <reference types="@dnvue/typings" />

import { defineProps, PropType } from "vue";

defineProps({
  /**
   * 设置或获取 Record<string, any> 类型的对象实例，用于表示可供重写的全局内联样式。
   *
   * @property {Object}
   */
  overrideStyle: {
    type: Object as PropType<dnvue.appComponent.OverrideStyleProperty>,
    default() {
      return null;
    },
  },
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { ComponentBase } from "../../abstracts";

export default defineComponent({
  extends: ComponentBase,
});
</script>
