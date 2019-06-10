import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  
  blogPosts: BlogPost[] =[]
  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost("Some title1", "Some Summary1"));
    this.blogPosts.push(new BlogPost("Some title2", "Some Summary2"));
  }

}
