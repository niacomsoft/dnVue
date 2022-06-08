<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <el-drawer v-model="showAppManifestDrawer" :show-close="false" direction="ltr" size="350px" custom-class="v-appmanifest-drawer" modal-class="v-appmanifest-drawer-modal">
    <template #title>
      <div data-v-role="header">
        <div><v-icon color="var(--md-grey-900)" size="var(--v-text-size--xl)" name="mdiApps" @click="onDrawerIconClick" /></div>
        <div>
          <span>{{ $t("APPLICATION_MANIFEST") }}</span>
        </div>
      </div>
    </template>
    <div data-v-role="apps">
      <div v-for="(app, appIdx) in readonlyAppManifest" :key="'v-appmanifest-item__' + appIdx" :style="{ backgroundImage: `url(${app.iconDataURL})` }">
        <a :href="app.url" :target="app.target ?? '_target'" rel="opener">{{ $t(app.name) }}</a>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { getExternalAppManifest, useComponentStateStore } from "../../lib";
import { storeToRefs } from "pinia";
import { DnvueComponentProps } from "../component-props";
import { vIcon } from "../v-icon";
import { computed } from "vue";

/**
 * 组件状态。
 */
const componentState = useComponentStateStore();

/**
 * 可监控的组件状态。
 */
const { showAppManifestDrawer } = storeToRefs(componentState);

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个字符串，用于表示应用标题。
     */
    title: {
      type: String,
      default: null,
    },
  })
);

/**
 * 用于处理抽屉图标单击事件。
 */
function onDrawerIconClick() {
  componentState.toggleAppManifestDrawerVisible(false);
}

/**
 * 获取 ExternalApp 类型的对象实例数组，用于表示应用清单列表。
 *
 * @readonly
 */
const readonlyAppManifest = computed(() => {
  return getExternalAppManifest();
});
</script>
