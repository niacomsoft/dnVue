<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <el-menu :collapse="isCollapsed" :mode="horizontalMode ? 'horizontal' : 'vertical'" class="el-menu-extensions" :data-v-role="isCollapsed">
    <v-menu-item v-for="item in items" :key="`dnvue::menu-item::root-${item.id}`" :option="item" />
  </el-menu>
</template>

<script lang="ts" setup>
/// <reference path="../component-types.d.ts" />

import { PropType } from "vue";
import { DnvueComponentProps } from "../component-props";
import { DnvueMenuItemOptions } from "../component-types";
import vMenuItem from "./v-menu-item.vue";

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取 DnvueMenuItemOptions 类型的对象实例数组，用于表示菜单项。
     *
     * @type {DnvueMenuItemOptions[]}
     */
    items: {
      type: Array as PropType<DnvueMenuItemOptions[]>,
      default() {
        return [];
      },
      required: true,
    },
    /**
     * 设置或获取一个值，用于表示是否折叠菜单。
     *
     * @type {boolean}
     */
    isCollapsed: {
      type: Boolean,
      default: false,
    },
    /**
     * 设置或获取一个值，用于表示是否启用横向模式菜单。
     *
     * @type {boolean}
     */
    horizontalMode: {
      type: Boolean,
      default: false,
    },
  })
);
</script>
