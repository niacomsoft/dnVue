<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-menu :items="readonlyMenuItems" :is-collapsed="!globalSidebarExpanded"> </v-menu>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { vMenu } from "../../../components";
import { usePersistentStateStore } from "../../../lib";
import { configureGlobalMenuItems } from "./this-component";

const persistentStore = usePersistentStateStore();

const { globalSidebarExpanded } = storeToRefs(persistentStore);

const readonlyMenuItems = computed(() => {
  return configureGlobalMenuItems();
});
</script>
