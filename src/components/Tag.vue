<script setup lang="ts">
defineOptions({
  name: 'c-tag',
})
defineProps<{
  color: string
}>()
</script>

<template>
  <div class="c-tag">
    <slot name="icon"></slot>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-tag {
  --tag-bg-color: v-bind(color);
  background-color: var(--tag-bg-color);
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 2px;
}
</style>
