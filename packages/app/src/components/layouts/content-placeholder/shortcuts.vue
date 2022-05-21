<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div>
    <v-flexible-container v-for="(shortcut, shortcutIdx) in shortcuts" :data-role-actived="activedIndex === shortcutIdx" :key="'appmanifest-shortcut__' + shortcutIdx" align-items="center" justify-content="center">
      <a :href="shortcut.url" :target="shortcut.externalLink ? '_blank' : '_self'">
        <img data-role="short-cut" :src="shortcut.iconDataURL" :title="$t(shortcut.name)" />
      </a>
    </v-flexible-container>
  </div>
</template>

<script lang="ts" setup>
import { vFlexibleContainer } from "../flexible-container";
import { getApplicationConfiguration } from "../../../lib";
import { computed } from "vue";

const shortcuts = computed<LinkedApplicationItemOption[]>(() => {
  return getApplicationConfiguration();
});

const props = defineProps({
  /**
   * 设置或获取一个值，用于表示激活的应用快捷方式索引数字。
   */
  activedIndex: {
    type: Number,
    default: 0,
  },
});
</script>
