<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox justify-content="center" align-items="center" class="vw-authentication">
    <div>
      <router-view />
    </div>
  </v-flexbox>
</template>

<script lang="ts" setup>
import { vFlexbox } from "../../../components";
</script>

<style lang="scss" scoped src="./index.scss"></style>
