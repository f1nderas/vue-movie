<script setup lang="ts">
defineProps<{
  color: string
}>()
</script>

<template>
  <div class="c-tag">
    <i>
      <slot name="icon"></slot>
    </i>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.c-tag {
  --tag-bg-color: v-bind(color);
  background-color: var(--tag-bg-color);
  padding: 2px 6px;
  border-radius: 8px;
}
</style>
