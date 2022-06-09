<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <el-menu-item :disabled="!(option?.enabled ?? true) || isDisabled" v-show="option?.visible ?? true" :index="`dnvue::menu-item::${option?.id}`" v-if="!option?.children || option.children.length === 0" @click="onMenuItemClick(option)">
    <v-icon color="inherit" v-if="readonlyShowIcon" :name="option?.iconName" />
    <span>{{ $t(option?.label ?? "菜单项") }}</span>
  </el-menu-item>
  <el-sub-menu :index="`dnvue::sub-menu-item::${option?.id}`" v-else>
    <template #title>
      <v-icon color="inherit" v-if="readonlyShowIcon" :name="option?.iconName" />
      <span>{{ $t(option?.label ?? "菜单项") }}</span>
    </template>
    <v-menu-item v-for="item in option.children" :key="`dnvue::sub-menu-item::${option?.id}::item-${item.id}`" :option="item" />
  </el-sub-menu>
</template>

<script lang="ts" setup>
/// <reference path="../component-types.d.ts" />

import { computed } from "vue";
import { vIcon } from "../v-icon";
import { MenuItemCommonProps } from "./menu-props";
import { DnvueComponentEvents } from "../component-events";
import { DnvueMenuItemOptions } from "../component-types";
import { useRouter } from "vue-router";
import { useDefaultLogWriter } from "@dnvue/composition-api";

const router = useRouter();
const logWriter = useDefaultLogWriter();

const props = defineProps(MenuItemCommonProps);

const events = defineEmits(
  Object.assign({}, DnvueComponentEvents, {
    click: (e?: DnvueMenuItemOptions) => {
      return true;
    },
  })
);

const readonlyShowIcon = computed<boolean>(() => {
  return !String.isNullOrWhitespace(props.option?.iconName);
});

function onMenuItemClick(e?: DnvueMenuItemOptions): void {
  if (e?.targetRoute) {
    logWriter.writeWarning({ message: `菜单项 “${props.option?.id}” 配置路由，因此直接导航到指定路由。`, contextData: e });
    router.push(e.targetRoute);
  } else {
    logWriter.writeTrace({ message: `菜单项 “${props.option?.id}” 被单击。`, contextData: e });
    events("click", e);
  }
}
</script>
