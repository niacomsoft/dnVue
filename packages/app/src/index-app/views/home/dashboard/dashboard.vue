<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <v-content-container :title="$t('DATA_TABLE')" ref="container">
    <template #operation>
      <el-form :model="observableQueryable" inline label-position="right" label-width="auto" label-suffix="：">
        <el-form-item label="名称">
          <el-input v-model="observableQueryable.name" />
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker v-model="observableQueryable.interval" type="daterange" format="YYYY-MM-DD" range-separator="至" />
        </el-form-item>
        <el-form-item>
          <v-btn icon-name="mdiSearch" text="SEARCH" @click="onSearchButtonClick" />
        </el-form-item>
      </el-form>
    </template>
    <el-table :data="dataTable" border stripe ref="el-table" table-layout="auto">
      <el-table-column type="index" width="80px" label="序号" />
      <el-table-column label="姓名" prop="name" width="300px" />
      <el-table-column label="年龄" align="right" prop="age" width="80px" />
    </el-table>
    <template #footer> 
      <v-page />
    </template>
  </v-content-container>
</template>

<script lang="ts" setup>
/// <reference path="../../../../components/component-types.d.ts" />

import { reactive, getCurrentInstance, watch, ref } from "vue";
import { vContentContainer, vBtn, vPage } from "../../../../components";
import { ContentContainerExpose } from "../../../../components/component-types";
import { getComponentOpenApi } from "../../../../lib";

const ctx = getCurrentInstance();

const observableQueryable = reactive({
  name: "",
  interval: [],
});

const dataTable: any[] = [];

for (let i = 0; i < 10; i++) {
  dataTable.push({
    name: `某学生 #${i + 1}`,
    age: 18,
    gender: i % 2 === 0 ? "男" : "女",
  });
}

function onSearchButtonClick(): void {
  getComponentOpenApi<ContentContainerExpose>(ctx, "container").beginTransaction();
  const timeoutId = setTimeout(() => {
    getComponentOpenApi<ContentContainerExpose>(ctx, "container").endTransaction();
    clearTimeout(timeoutId);
  }, 3000);
}
</script>
