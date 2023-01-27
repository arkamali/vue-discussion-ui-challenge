<script setup lang="ts">
import { computed } from "vue";
import Avatar from "./Base/Avatar.vue";

const props = defineProps<{
  replyId?: number;
}>();

const placeholder = computed(() => {
  if (props.replyId) {
    return "Reply";
  }
  return "Start a discussion";
});
</script>

<template>
  <div class="new" :class="[{ 'is-start': !replyId }]">
    <Avatar name="Alireza Kamali" />
    <input :placeholder="placeholder" />
  </div>
</template>

<style>
.new {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
}

.new.is-start {
  background: #fafbfc;
  padding: 28px 18px;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid #e2e9ee;
}

.new input {
  border: 2px solid #e7ecf0;
  border-radius: 5px;
  height: 10px;
  padding: 18px;
  font-size: 1rem;
  flex: 1 1 auto;
  align-self: auto;
}
</style>
