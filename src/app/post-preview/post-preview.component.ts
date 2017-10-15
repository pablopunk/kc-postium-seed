import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;
  @Output() postClicked = new EventEmitter<Post>();
  @Output() authorClicked = new EventEmitter<number>();

  notificarPostClicked(post: Post) {
    this.postClicked.emit(post);
  }
  notificarAuthorClicked(id: number) {
    this.authorClicked.emit(id);
  }
  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

}
