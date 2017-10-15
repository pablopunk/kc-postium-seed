import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  @Input() posts: Post[];

  constructor(private _router: Router) {}

  verPost(post: Post) {
    this._router.navigate(['posts', post.id]);
  }

  verAuthor(id: number) {
    this._router.navigate(['posts', 'users', id]);
  }
}
