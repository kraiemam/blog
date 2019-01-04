export class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: string;

  constructor( title: string,  content: string,  loveIts?: any, created_at?: string) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}