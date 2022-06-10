<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <el-button :class="readonlyIconClassName" :type="elType" :plain="elPlain" :text="mode === 'text'" :link="mode === 'link'" :round="border === 'round'" :circle="border === 'circle'" :loading="inProcessing" :disabled="isDisabled" :data-v-role--block="block" @click="onClick">
    <slot />
    <template v-if="!readonlyDefaultSlotVisible">
      {{ $t(text) }}
    </template>
  </el-button>
</template>

<script lang="ts" setup>
import { BtnCommonProps } from "./btn-props";
import { DnvueComponentEvents } from "../component-events";
import { computed, useSlots } from "vue";
import { paramCase } from "change-case";

const slots = useSlots();

const props = defineProps(BtnCommonProps);

const events = defineEmits(DnvueComponentEvents);

const readonlyDefaultSlotVisible = computed<boolean>(() => {
  return slots["default"] !== null && slots["default"] !== undefined;
});

const readonlyIconClassName = computed<string[] | null>(() => {
  if (String.isNullOrWhitespace(props.iconName)) return null;
  return ["mdi", paramCase(props.iconName)];
});

function onClick(): void {
  events("click");
}
</script>
