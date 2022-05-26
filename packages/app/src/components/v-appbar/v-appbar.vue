<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-flexbox class="v-appbar" justify-content="space-between" align-items="center">
    <v-icon name="mdiApps" size="var(--v-text-size--xxxl)" :tooltip="$t('APPLICATION_MANIFEST')" />
  </v-flexbox>
</template>

<script lang="ts" setup>
import { vFlexbox } from "../v-flexbox";
import { vIcon } from "../v-icon";
</script>
