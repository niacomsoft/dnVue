<!-- 
  **************************************************************************************************************************
  COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
  LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
  **************************************************************************************************************************
-->

<template>
  <el-pagination :page-sizes="sizes" layout="slot, prev, pager, next, sizes" :current-page="currentPage" :page-size="currentSize" :total="total" :page-count="total" :disabled="isDisabled || total === 0" :prev-text="$t('PREVIOUS_PAGE')" :next-text="$t('NEXT_PAGE')" @size-change="onSizeChanged" @current-change="onCurrentChanged">
    <span style="padding-right: 20px">{{ readonlyTotalDescription }}</span>
  </el-pagination>
</template>

<script lang="ts" setup>
import { vFlexbox } from "../v-flexbox";
import { DnvueComponentProps } from "../component-props";
import { DnvueComponentEvents } from "../component-events";
import { computed, PropType } from "vue";
import { DEFAULT_PAGESIZE, DEFAULT_PAGESIZES, useLocalization } from "../../lib";

const props = defineProps(
  Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取 Number 类型的数组，用于表示单页数据行数。
     *
     * @type {number[]}
     */
    sizes: {
      type: Array as PropType<number[]>,
      default() {
        return DEFAULT_PAGESIZES;
      },
    },
    /**
     * 设置或获取一个值，用于表示当前的页索引。
     *
     * @type {number}
     */
    currentPage: {
      type: Number,
      default: 1,
    },
    /**
     * 设置或获取一个值，用于表示当前的单页数据行数。
     */
    currentSize: {
      type: Number,
      default: DEFAULT_PAGESIZE,
    },
    /**
     * 设置或获取一个值，用于表示数据总量。
     *
     * @type {number}
     */
    total: {
      type: Number,
      default: 1,
    },
  })
);

const events = defineEmits(
  Object.assign({}, DnvueComponentEvents, {
    "update:currentPage": (value: number) => {
      return true;
    },
    currentPageChanged: (value: number) => {
      return true;
    },
    "update:currentSize": (value: number) => {
      return true;
    },
    currentSizeChanged: (value: number) => {
      return true;
    },
  })
);

const readonlyTotalDescription = computed<string>(() => {
  let description = useLocalization()
    .t("PAGING")
    .replace(/\#Index/, props.currentPage.toString())
    .replace(/\#Total/, props.total.toString());
  return description;
});

function onCurrentChanged(value: number): void {
  events("update:currentPage", value);
  events("currentPageChanged", value);
  alert(value);
}

function onSizeChanged(value: number): void {
  events("update:currentSize", value);
  events("currentSizeChanged", value);
}
</script>
