import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';
import { Category } from '../category';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  @Output() authorClicked = new EventEmitter<number>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { post: Post }) => {
      this.post = data.post;
      this._window.scrollTo(0, 0);
    });
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

  notificarAuthorClicked(id: number) {
    this.authorClicked.emit(id);
  }

  verCategory(category: Category) {
    this._router.navigate(['posts', 'categories', category.id]);
  }
}
