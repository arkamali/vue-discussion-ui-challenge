import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);

export function timeAgo(timestamp: number) {
  const dateFormat = new Date(timestamp);
  const timeAgo = new TimeAgo("en-US");
  return timeAgo.format(dateFormat);
}
