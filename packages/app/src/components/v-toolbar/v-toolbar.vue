<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox align-items="center" class="v-toolbar" :justify-content="align === 'left' ? 'flex-start' : 'flex-end'" :data-v-role="align">
    <slot />
    <v-toolbar-item v-if="showUserItem">
      <el-popover v-model:visible="observableUserPopoverVisible" placement="bottom-end" width="300px" trigger="click" popper-class="el-popover-extensions">
        <template #reference>
          <v-icon name="mdiAccountOutline" @click="onUserIconClick" />
        </template>
        <div class="v-toolbar-item-default-user">
          <v-flexbox align-items="center" justify-content="space-between">
            <img src="../../assets/icons/App.png" />
            <el-button type="primary" size="small" text @click="onSignoffButtonClick">{{ $t("SIGN_OFF") }}</el-button>
          </v-flexbox>
          <v-flexbox data-v-role="item">
            <h1>{{ `${$t("CURRENT_USER")} - @${readonlyCurrentUserName}` }}</h1>
          </v-flexbox>
          <div data-v-role="item">
            <el-button type="primary" size="small" link @click="onProfileButtonClick">{{ $t("PROFILE") }}</el-button>
          </div>
          <div data-v-role="item">
            <el-button type="primary" size="small" link @click="onChangePasswordButtonClick">{{ $t("CHANGE_PASSWORD") }}</el-button>
          </div>
          <div data-v-role="item">
            <el-button type="danger" class="mdi mdi-exit-to-app" @click="onSignoffButtonClick">{{ $t("SIGN_OFF") }}</el-button>
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
import { DnvueComponentEvents } from "../component-events";
import { computed, PropType, ref } from "vue";
import { usePrincipal, useBasicAuthenticator } from "../../lib";
import { useRouter } from "vue-router";

const router = useRouter();

const observableUserPopoverVisible = ref(false);

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
    /**
     * 设置或获取一个值，用于表示是否显示用户功能菜单项。
     *
     * @type {boolean}
     */
    showUserItem: {
      type: Boolean,
      default: true,
    },
    /**
     * 设置或获取一个值，用于表示是否阻止注销按钮单击事件。
     */
    preventSignoffButtonClickEventHandler: {
      type: Boolean,
      default: false,
    },
  })
);

const events = defineEmits(
  Object.assign({}, DnvueComponentEvents, {
    "user-button-click": (button: "sign-off" | "change-password" | "profile") => {
      return true;
    },
  })
);

const readonlyCurrentUserName = computed<string>(() => {
  return usePrincipal().identity.name;
});

function _toggleObservableUserPopoverVisible(): void {
  observableUserPopoverVisible.value = !observableUserPopoverVisible.value;
}

function onSignoffButtonClick(): void {
  _toggleObservableUserPopoverVisible();

  if (props.preventSignoffButtonClickEventHandler) {
    events("user-button-click", "sign-off");
  } else {
    const authenticator = useBasicAuthenticator();
    authenticator.signoutAsync().then(() => {
      router.push("/authentication/sign-in");
    });
  }
}

function onChangePasswordButtonClick(): void {
  _toggleObservableUserPopoverVisible();
  events("user-button-click", "change-password");
}

function onProfileButtonClick(): void {
  _toggleObservableUserPopoverVisible();
  events("user-button-click", "profile");
}

function onUserIconClick(): void {
  _toggleObservableUserPopoverVisible();
}
</script>
