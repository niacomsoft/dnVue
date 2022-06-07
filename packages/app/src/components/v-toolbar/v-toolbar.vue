<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox align-items="center" class="v-toolbar" :justify-content="align === 'left' ? 'flex-start' : 'flex-end'" :data-v-role="align">
    <v-toolbar-item>
      <el-popover placement="bottom-end" width="300px" trigger="click" popper-class="el-popover-extensions">
        <template #reference>
          <v-icon name="mdiAccountOutline" />
        </template>
        <div class="v-toolbar-item-default-user">
          <v-flexbox align-items="center" justify-content="space-between">
            <img src="../../assets/icons/App.png" />
            <el-button type="primary" size="small" text>{{ $t("SIGN_OFF") }}</el-button>
          </v-flexbox>
          <v-flexbox data-v-role="item">
            <h1>{{ `${$t("CURRENT_USER")} - @${readonlyCurrentUserName}` }}</h1>
          </v-flexbox>
          <div data-v-role="item">
            <el-button type="primary" size="small" link>{{ $t("PROFILE") }}</el-button>
          </div>
          <div data-v-role="item">
            <el-button type="primary" size="small" link>{{ $t("CHANGE_PASSWORD") }}</el-button>
          </div>
          <div data-v-role="item">
            <el-button type="danger" class="mdi mdi-exit-to-app">{{ $t("SIGN_OFF") }}</el-button>
          </div>
        </div>
      </el-popover>
    </v-toolbar-item>
  </v-flexbox>
</template>

<script lang="ts" setup>
import { vFlexbox } from "../v-flexbox";
import { vIcon } from "../v-icon";
import vToolbarItem from "./v-toolbar-item.vue";
import { DnvueComponentProps } from "../component-props";
import { computed, PropType } from "vue";
import { usePrincipal } from "../../lib";

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个字符串，用于表示对齐方式。
     *
     * @type {string}
     */
    align: {
      type: String as PropType<"left" | "right">,
      default: "right",
    },
  })
);

const readonlyCurrentUserName = computed<string>(() => {
  return usePrincipal().identity.name;
});
</script>
