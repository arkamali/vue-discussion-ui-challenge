<script setup lang="ts">
import type { IComment } from "@/types/types";
import { timeAgo } from "../functions/functions";

import Avatar from "./Base/Avatar.vue";
import Like from "./Base/Like.vue";
import NewComment from "./NewComment.vue";

defineProps<{
  discussions: IComment[];
  replyId?: number;
}>();
</script>

<template>
  <div
    v-for="(discussion, index) in discussions"
    :key="index"
    class="discussion"
  >
    <div class="flex-container">
      <div class="avatar-holder">
        <Avatar :src="discussion.user.avatar" :name="discussion.user.name" />
      </div>

      <div class="details-holder">
        <span class="name">{{ discussion.user.name }}</span>
        <span class="date">{{ timeAgo(discussion.date) }}</span>
        <div class="text">{{ discussion.text }}</div>

        <Like :likes="discussion.likes" :i-liked-it="discussion.iLikedIt" />
      </div>
    </div>
  </div>

  <NewComment :reply-id="replyId" />
</template>

<style scoped>
.discussion {
  background-color: #ffffff;
}

.flex-container {
  display: flex;
  height: 100%;
  padding: 25px 0;
  gap: 5px;
  font-size: 1rem;
}

.avatar-holder {
  align-self: auto;
}

.details-holder {
  flex-grow: 1;
  flex-shrink: 1;
  align-self: flex-start;
}

.text {
  line-height: 1.5;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #4c5760;
}

.name {
  font-weight: bold;
  padding-right: 8px;
  color: #404348;
  font-size: 1.1rem;
}

.date {
  color: #a1aabe;
}
</style>
