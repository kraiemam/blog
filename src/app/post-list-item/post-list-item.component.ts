import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIts: number;
  @Input() post: Post;

  constructor() { }

  ngOnInit() {}

  onLoveIt() {
    this.postLoveIts++;
    this.post.loveIts = this.postLoveIts;
  }

  onDontLoveIt() {
    this.postLoveIts--;
    this.post.loveIts = this.postLoveIts;
  }

 
}
