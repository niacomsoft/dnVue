<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexible-container class="v-top-banner" align-items="center" justify-content="space-between">
    <div data-role="topbanner-logo">
      <img src="../../assets/icons/dnvue-128x128.png" />
    </div>
  </v-flexible-container>
</template>

<script lang="ts" setup>
import { vFlexibleContainer } from "../layouts";
import { getApplicationConfiguration } from "../../lib";
</script>
