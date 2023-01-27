<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  src?: string;
}>();

const nameLetter = computed(() => {
  const nameSplitted = props.name.split(" ");
  return (
    nameSplitted[0].substring(0, 1) +
    "" +
    nameSplitted[nameSplitted.length - 1].substring(0, 1)
  );
});
</script>

<template>
  <div class="avatar">
    <span v-if="!src">
      {{ nameLetter }}
    </span>
    <img v-else :src="src" />
  </div>
</template>

<style scoped>
.avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #deeefc;
  color: #1d6ca5;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar img {
  border-radius: 50%;
  width: 100%;
}
</style>
