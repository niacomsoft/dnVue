<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox class="v-appbar" align-items="center">
    <v-icon name="mdiApps" v-if="showAppIcon" size="var(--v-text-size--xxxl)" :tooltip="$t('APPLICATION_MANIFEST')" @click="onAppIconClick" />
    <v-image :src="logoImageUrl" @click="onLogoImageClick" width="40px" class="v-appbar-logo" />
    <span class="v-appbar-title" :style="{ color: titleColor }">{{ title }}</span>
    <div class="v-appbar-right-side">
      <slot />
    </div>
  </v-flexbox>
</template>

<script lang="ts" setup>
import { vFlexbox } from "../v-flexbox";
import { vIcon } from "../v-icon";
import { vImage } from "../v-image";
import { DnvueComponentProps } from "../component-props";
import { DnvueComponentEvents } from "../component-events";
import { useTemporaryStateStore } from "../../lib";

const componentStateStore = useTemporaryStateStore();

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个值，用于表示是否应用 Icon 图标。
     *
     * @type {boolean}
     */
    showAppIcon: {
      type: Boolean,
      default: true,
    },
    /**
     * 设置或获取一个字符串，用于表示 LOGO 图片 URL 地址。
     *
     * @type {string}
     */
    logoImageUrl: {
      type: String,
      default: null,
    },
    /**
     * 设置或获取一个字符串，用于表示应用标题。
     *
     * @type {string}
     */
    title: {
      type: String,
      default: null,
    },
    /**
     * 设置或获取一个字符串，用于表示应用标题文字颜色。
     *
     * @type {string}
     */
    titleColor: {
      type: String,
      default: "var(--md-white)",
    },
  })
);

const events = defineEmits(
  Object.assign({}, DnvueComponentEvents, {
    click: (target: "app-icon" | "logo-image") => {
      return target === "app-icon" || target === "logo-image";
    },
  })
);

/**
 * 用于处理应用图标单击事件。
 */
function onAppIconClick() {
  componentStateStore.toggleAppManifestDrawerVisible();
  events("click", "app-icon");
}

/**
 * 用于处理 LOGO 图片单击事件。
 */
function onLogoImageClick() {
  events("click", "logo-image");
}
</script>
