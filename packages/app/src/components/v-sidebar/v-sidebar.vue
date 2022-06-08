<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox direction="column" class="v-sidebar">
    <v-flexbox class="v-sidebar-content" :direction="pinPosition === 'right' ? 'row' : 'row-reverse'">
      <div data-v-role="content">
        <slot />
      </div>
      <div v-if="showPin" data-v-role="pin">
        <div class="mdi" :class="{ 'mdi-pin': pinMode === 'pin', 'mdi-pin-off': pinMode === 'unpin' }" @click="onPinIconClick"></div>
        <div data-v-role="line"></div>
      </div>
    </v-flexbox>
  </v-flexbox>
</template>

<script lang="ts" setup>
import { DnvueComponentProps } from "../component-props";
import { DnvueComponentEvents } from "../component-events";
import { computed, PropType, useSlots } from "vue";
import { vFlexbox } from "../v-flexbox";

const slots = useSlots();

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个值，用于表示是否显示 Pin 按钮。
     *
     * @type {boolean}
     */
    showPin: {
      type: Boolean,
      default: true,
    },
    /**
     * 设置或获取一个字符串，用于表示 Pin 按钮位置。
     *
     * @type {string}
     */
    pinPosition: {
      type: String as PropType<"left" | "right">,
      default: "right",
    },
    /**
     * 设置或获取一个字符串，用于表示 Pin 按钮模式。
     *
     * @type {string}
     */
    pinMode: {
      type: String as PropType<"pin" | "unpin">,
      default: "pin",
    },
  })
);

const events = defineEmits(
  Object.assign({}, DnvueComponentEvents, {
    "pin-click": () => {
      return true;
    },
  })
);

function onPinIconClick() {
  events("pin-click");
  events("click");
}
</script>
