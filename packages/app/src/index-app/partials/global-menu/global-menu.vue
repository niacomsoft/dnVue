<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <el-menu class="el-menu-extensions" :collapse="!globalSidebarExpanded">
    <el-menu-item index="root::home::1">
      <v-icon name="mdiHome" color="inherit" />
      <span>{{ $t("HOME_PAGE") }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { vIcon } from "../../../components";
import { usePersistentStateStore } from "../../../lib";

const persistentStore = usePersistentStateStore();

const { globalSidebarExpanded } = storeToRefs(persistentStore);
</script>
