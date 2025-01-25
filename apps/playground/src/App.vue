<template>
  <BMConfigProvider prefix-cls="playground">
    <div class="container">
      <ComponentPanel />
      <WorkspacePanel />
      <Settings />
    </div>
  </BMConfigProvider>
</template>

<script setup lang="ts">
import ComponentPanel from '@/components/ComponentPanel/index.vue'
import Settings from '@/components/Settings/index.vue'
import WorkspacePanel from '@/components/WorkspacePanel/index.vue'
import { BMConfigProvider } from '@bmos/components'

console.log(12)
</script>

<style lang="less" scoped>
  .container {
  position: relative;
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  min-height: 0;
  overflow: hidden;

  .workspace-panel {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 4px;
    overflow: hidden;
    background-color: #eee;
  }
}
</style>
