<script setup lang="ts">
import { timeAgo } from "../functions/functions";
import type { IDiscussion } from "@/types/types";

import Avatar from "./Base/Avatar.vue";
import Like from "./Base/Like.vue";
import Comments from "./Comments.vue";
import NewComment from "./NewComment.vue";

defineProps<{
  discussions: IDiscussion[];
}>();
</script>

<template>
  <div class="discussions">
    <NewComment />

    <div v-for="(discussion, index) in discussions" :key="index">
      <div class="flex-container">
        <div
          class="avatar-holder"
          :class="[{ 'have-replies': discussion.replies.length }]"
        >
          <Avatar :src="discussion.user.avatar" :name="discussion.user.name" />
        </div>

        <div class="details-holder">
          <span class="name">{{ discussion.user.name }}</span>
          <span class="date">{{ timeAgo(discussion.date) }}</span>
          <div class="text">{{ discussion.text }}</div>

          <Like :likes="discussion.likes" :i-liked-it="discussion.iLikedIt" />
          <button class="reply">Reply</button>

          <Comments
            v-if="discussion.replies.length"
            :discussions="discussion.replies"
            :reply-id="discussion.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  gap: 1rem;
  justify-items: stretch;
  border-bottom: 2px solid #e2e9ee;
  padding: 20px;
}

.avatar-holder {
  flex: none;
  align-items: center;
  justify-content: center;
  position: relative;
}

.avatar-holder.have-replies::before {
  content: "";
  position: absolute;
  border-right: 3px solid #eef2f5;
  top: 65px;
  right: 38px;
  bottom: 0;
}

.details-holder {
}

.discussions {
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  margin-top: 3px;
  border-bottom: 2px solid #e2e9ee;
  font-size: 1rem;
}

.text {
  line-height: 1.5;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #4c5760;
}

.item {
  display: flex;
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

.reply {
  color: #1d6de5;
  justify-content: center;
  align-items: center;
  height: 35px;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  margin: 0 0 0 15px;
  position: absolute;
  border: 0;
  background: transparent;
}
</style>
