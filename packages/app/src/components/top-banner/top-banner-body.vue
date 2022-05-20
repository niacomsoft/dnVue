<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <div class="v-top-banner-body">
    <div v-for="(app, appIdx) in appManifest" :key="'v-app-manifest__' + appIdx">
      <div>
        <img :src="app.iconDataURL" />
      </div>
      <div>
        <a :href="app.url" :target="app.externalLink ? '_blank' : '_self'">{{ $t(app.name) }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue-demi";
import { getApplicationConfiguration } from "../../lib";

const appManifest = computed(() => {
  return getApplicationConfiguration();
});
</script>
