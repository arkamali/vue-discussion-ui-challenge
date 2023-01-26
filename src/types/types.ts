interface IUser {
  name: string;
  avatar?: string;
}

interface IComment {
  id: number;
  date: number; // unix timestamp in milliseconds.
  user: IUser;
  text: string;
  likes: number;
  iLikedIt: boolean;
}

export default interface IDiscussion extends IComment {
  replies: IComment[];
}

export default interface IProps {
  comments: IComment[];
}
