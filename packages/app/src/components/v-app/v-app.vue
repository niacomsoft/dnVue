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
import { PropType } from "vue";
import { DnvueComponentProps } from "../component-props";

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取 Record<string, string | number> 类型的对象实例，用于表示需要重写的样式。
     *
     * @type {Record<string, string | number>}
     */
    overrideStyle: {
      type: Object as PropType<Record<string, string | number>>,
      default() {
        return null;
      },
    },
  })
);
</script>
