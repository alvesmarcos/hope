export enum FeedTypes {
  FEED_REQUEST = '@feed/FEED_REQUEST',
  FEED_SUCCESS = '@feed/FEED_SUCCESS',
  FEED_FAILURE = '@feed/FEED_FAILURE',
}

export interface Avatar {
  url: string;
}

type Thumbnail = Avatar;

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: Avatar;
}

export interface Fact {
  id: number;
  title: string;
  text: string;
  created_by: User;
}

type Tip = Fact;

export interface Quote {
  id: number;
  author: string;
  text: string;
  created_by: User;
}

export interface ExpertOpinion {
  id: number;
  text: string;
  created_by: User;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
  created_by: User;
}

export interface Article {
  id: number;
  title: string;
  url: string;
  thumbnail: Thumbnail;
  created_by: User;
}

export interface Testimony {
  id: number;
  title: string;
  text: string;
  url: string;
  thumbnail: Thumbnail;
  created_by: User;
}

export interface Documentary {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: Thumbnail;
  created_by: User;
}

export interface Feed {
  readonly fact: Fact | null;
  readonly tip: Tip | null;
  readonly quote: Quote | null;
  readonly expert_opinion: ExpertOpinion | null;
  readonly faq: Faq | null;
  readonly article: Article | null;
  readonly testimony: Testimony | null;
  readonly documentary: Documentary | null;
}

export interface FeedState {
  readonly data: Feed;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface FeedCreators {
  type: FeedTypes;
  payload?: Feed;
}
