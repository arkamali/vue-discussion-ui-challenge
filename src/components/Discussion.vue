<script setup lang="ts">
import type IDiscussion from "@/types/types";
import Avatar from "./Base/Avatar.vue";
import Like from "./Base/Like.vue";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

defineProps<{
  discussions: IDiscussion[];
}>();

function relativeDays(timestamp: number) {
  const now = Date.now();
  const diff = now - timestamp;

  const dateFormat = new Date(timestamp);

  TimeAgo.addDefaultLocale(en);

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  return timeAgo.format(dateFormat);
  // "just now"

  /*
  console.log(
    "Date: " +
      dateFormat.getDate() +
      "/" +
      (dateFormat.getMonth() + 1) +
      "/" +
      dateFormat.getFullYear() +
      " " +
      dateFormat.getHours() +
      ":" +
      dateFormat.getMinutes() +
      ":" +
      dateFormat.getSeconds()
  );
  
  const dateObj = new Date(timestamp);
  const minute = dateObj.getUTCMinutes();
  const hour = dateObj.getUTCHours();
  const day = dateObj.getDay();

  return (
    "-" +
    hour +
    "-" +
    minute +
    " " +
    day +
    "-" +
    dateObj.getMonth() +
    "-" +
    dateObj.getUTCFullYear()
  );


  // less than 1 hour
  if (diff < 3600000) {
    return dateFormat.getMinutes() + "min ago";
  }
  // 1 to 24 hour
  else if (diff > 3600000 && diff < 86400000) {
    return dateFormat.getHours() + "h ago";
  }

  return dateFormat.getDate() + "d ago";
  */
}
</script>

<template>
  <div class="discussions">
    <div class="new">
      <Avatar :src="undefined" name="Alireza Kamali" />
      <input placeholder="Start a discussion" />
    </div>

    <div
      class="discussion"
      v-for="(discussion, index) in discussions"
      :key="index"
    >
      <div class="flex-container">
        <div class="item1">
          <Avatar :src="discussion.user.avatar" :name="discussion.user.name" />
        </div>
        <div class="item2">
          <span class="name">{{ discussion.user.name }}</span>
          <span class="date">{{ relativeDays(discussion.date) }}</span>
          <br />
          <div class="text">{{ discussion.text }}</div>
          <br />
          <Like :likes="discussion.likes" :i-liked-it="discussion.iLikedIt" />
          <div class="reply"><span>Reply</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;

  height: 100%;
  padding: 15px;
  gap: 5px;
}

.item1 {
  /* flex:0 1 auto; */
  align-self: auto;
}

.item2 {
  /* flex:1 1 auto; */
  flex-grow: 1;
  flex-shrink: 1;
  align-self: flex-start;
}

.discussions {
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  margin-top: 3px;
  border-bottom: 2px solid #e2e9ee;
}

.new {
  background: #fafbfc;
  padding: 18px;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid #e2e9ee;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
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

.discussion {
  background-color: #ffffff;
}

.text {
  line-height: 1.5;
}

.item {
  display: flex;
}

.name {
  font-weight: bold;
  padding-right: 8px;
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
}
</style>
