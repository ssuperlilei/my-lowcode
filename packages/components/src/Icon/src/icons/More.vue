<template>
  <Icon v-bind="attrs">
    <template #component>
      <svg
        width="12"
        height="12"
        viewBox="0 0 3 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 1.25C2.5 1.94036 1.94036 2.5 1.25 2.5C0.559644 2.5 0 1.94036 0 1.25C0 0.559644 0.559644 0 1.25 0C1.94036 0 2.5 0.559644 2.5 1.25Z"
          fill="#6C7380" />
        <path
          d="M2.5 5.75C2.5 6.44036 1.94036 7 1.25 7C0.559644 7 0 6.44036 0 5.75C0 5.05964 0.559644 4.5 1.25 4.5C1.94036 4.5 2.5 5.05964 2.5 5.75Z"
          fill="#6C7380" />
        <path
          d="M2.5 10.25C2.5 10.9404 1.94036 11.5 1.25 11.5C0.559644 11.5 0 10.9404 0 10.25C0 9.55964 0.559644 9 1.25 9C1.94036 9 2.5 9.55964 2.5 10.25Z"
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
