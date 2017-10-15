import { Component, Inject,  OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  @Output() authorClicked = new EventEmitter<number>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window
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

  /*=========================================================================|
  | Yellow Path                                                              |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts de la categoría indicada. Recuerda que para hacer esto necesitas   |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/categories', pasando como parámetro el identificador de la       |
  | categoría.                                                               |
  |=========================================================================*/
}
