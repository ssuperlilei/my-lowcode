<template>
  <Icon v-bind="attrs">
    <template #component>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.773 3.7125L8.4855 0L9.546 1.0605L4.773 5.8335L0 1.0605L1.0605 0L4.773 3.7125Z"
          fill="#6C7380" />
      </svg>
    </template>
  </Icon>
</template>
<script lang="ts" setup>
  import Icon from '@ant-design/icons-vue';
  import { useAttrs } from 'vue';

  const attrs = useAttrs();
</script>
