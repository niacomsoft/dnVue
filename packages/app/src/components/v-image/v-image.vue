<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <img class="v-image" v-if="src !== null" :src="src" :data-v-clickable="clickable" @click="onImageClick" :style="readonlyResponsibleSize" />
</template>

<script lang="ts" setup>
import { DnvueComponentProps } from "../component-props";
import { DnvueComponentEvents } from "../component-events";
import { useDefaultLogWriter } from "@dnvue/composition-api";
import { computed } from "vue";

const logger = useDefaultLogWriter();

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个值，用于表示图片是否允许单击。
     *
     * @type {boolean}
     */
    clickable: {
      type: Boolean,
      default: false,
    },
    /**
     * 设置或获取一个字符串，用于表示图片 URL 地址。
     *
     * @type {string}
     */
    src: {
      type: String,
      default: null,
    },
    /**
     * 设置或获取一个字符串，用于表示图片宽度。
     *
     * @type {string}
     */
    width: {
      type: [String, Number],
      default: "auto",
    },
    /**
     * 设置或获取一个字符串，用于表示图片高度。
     *
     * @type {string}
     */
    height: {
      type: [String, Number],
      default: "auto",
    },
  })
);

const events = defineEmits(Object.assign({}, DnvueComponentEvents, {}));

/**
 * 用于处理图片单击事件。
 */
function onImageClick() {
  if (props.clickable && !props.isDisabled) {
    logger.writeTrace({ message: "v-image 组件被单击。" });
    events("click");
  }
}

/**
 * 获取 { width: string; height: string } 类型的对象实例，用于表示响应式图片大小。
 *
 * @readonly
 * @type {{ width: string; height: string }}
 */
const readonlyResponsibleSize = computed<{ width: string; height: string }>(() => {
  return {
    width: typeof props.width === "number" ? `${props.width}px` : props.width,
    height: typeof props.height === "number" ? `${props.height}px` : props.height,
  };
});
</script>
