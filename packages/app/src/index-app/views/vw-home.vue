<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-control-panel>
    <template #header>
      <v-top-banner />
    </template>
    <v-content-placeholder>
      <router-view />
    </v-content-placeholder>
  </v-control-panel>
</template>

<script lang="ts" setup>
import { vControlPanel, vTopBanner, vFlexibleContainer, vContentPlaceholder } from "../../components";
</script>
