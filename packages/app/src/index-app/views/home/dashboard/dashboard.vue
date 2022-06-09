<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-content-container :title="$t('DATA_TABLE')" ref="container">
  </v-content-container>
</template>

<script lang="ts" setup>
import { reactive, getCurrentInstance } from "vue";
import { vContentContainer } from "../../../../components";
</script>
