type User = {
  displayName: string;
  birthdate: string;
  gender: string;
  orientation: string;
  bio: string;
  location: string;
  interests: string[];
  photos: Photo[];
  posts: Post[];
  friends: User[];
  messages: Message[];
}

type Photo = {
  url: string;
  caption: string;
  tags: string[];
}

type Post = {
  timestamp: string;
  sender: User;
  content: string;
  likes: User[];
  replies: Reply[];
  tags: string[];
}

type Message = {
  timestamp: string;
  sender: User;
  receiver: User;
  content: string;
}

type Reply = {
  timestamp: string;
  sender: User;
  content: string;
}