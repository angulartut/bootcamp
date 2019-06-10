import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  
  summary = `Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since 
the 1500s, when an unknown printer took a galley of 
type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also 
the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 
1960s with the release of Letraset sheets containing
Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including
versions of Lorem Ipsum`;

  blogPosts: BlogPost[] =[]
  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost("Some title1", this.summary));
    this.blogPosts.push(new BlogPost("Some title2", this.summary));
  }

}
