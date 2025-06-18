export interface Comment {
  id: number;
  author: string;
  message: string;
  timestamp: Date;
  replies: Comment[];
  likes?:number;
  dislikes?:number;  
}
