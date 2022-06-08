<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox class="v-container">
    <div class="v-container-shortcuts" v-if="showAppShortcuts">
      <div v-for="(app, appIdx) in readonlyAppMainfest" :key="`v-app-shortcut__${appIdx}`" :data-v-actived="appIdx === activedAppShortcutIndex">
        <a :href="app.url" :target="app.target ?? '_blank'" :title="$t(app.name)" rel="opener">
          <img :src="app.iconDataURL" />
        </a>
      </div>
    </div>
    <div class="v-container-leftside" v-if="readonlyLeftSideVisible">
      <slot name="left-side" />
    </div>
    <div class="v-container-content">
      <slot />
    </div>
  </v-flexbox>
</template>

<script lang="ts" setup>
import { vFlexbox } from "../v-flexbox";
import { getExternalAppManifest } from "../../lib";
import { DnvueComponentProps } from "../component-props";
import { computed, useSlots } from "vue";

const slots = useSlots();

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个值，用于表示是否显示应用快捷方式导航条。
     *
     * @type {boolean}
     */
    showAppShortcuts: {
      type: Boolean,
      default: true,
    },
    /**
     * 设置或获取一个值，用于表示当前激活的应用快捷方式索引数字。
     *
     * @type {number}
     */
    activedAppShortcutIndex: {
      type: Number,
      default: 0,
    },
  })
);

/**
 * 获取 ExternalApp 类型的对象实例数组，用于表示应用清单。
 */
const readonlyAppMainfest = computed(() => {
  return getExternalAppManifest();
});

/**
 * 设置或获取一个值，用于表示是否显示左侧栏。
 */
const readonlyLeftSideVisible = computed(() => {
  return slots["left-side"];
});
</script>
