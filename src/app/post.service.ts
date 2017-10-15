import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';
import { Post } from './post';

const getPostParams = (additional = {}): HttpParams => {
  let params = new HttpParams()
    .set('_sort', 'publicationDate')
    .set('_order', 'DESC')
    .set('publicationDate_lte', Date.now().toString());

  for (const key in additional) {
    if (additional[key]) {
      params = params.append(key, additional[key]);
    }
  }
  return params;
};

const postEsDeCategoria = (p: Post, id: number) =>
  p.categories.filter(c => c.id.toString() === id.toString()).length > 0;

const filtrarPostsPorCategoria = (posts: Post[], id: number) =>
  posts.filter(p => postEsDeCategoria(p, id));

@Injectable()
export class PostService {
  constructor(private _http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const params = getPostParams();
    return this._http.get<Post[]>(`${environment.backendUri}/posts`, {
      params
    });
  }

  getUserPosts(id: number): Observable<Post[]> {
    const params = getPostParams({
      'author.id': id.toString()
    });

    return this._http.get<Post[]>(`${environment.backendUri}/posts`, {
      params
    });
  }

  getCategoryPosts(id: number): Observable<Post[]> {
    const params = getPostParams();

    return this._http
      .get<Post[]>(`${environment.backendUri}/posts`, {
        params
      })
      .map(res => filtrarPostsPorCategoria(res, id));
  }

  getPostDetails(id: number): Observable<Post> {
    return this._http.get<Post>(`${environment.backendUri}/posts/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    /*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Utiliza el cliente HTTP para guardar en servidor el post indicado. La    |
    | ruta sobre la cual tienes que hacer la petición POST es '/posts'.        |
    | Recuerda que siempre que se crea una entidad en servidor es una buena    |
    | práctica retornar la misma con los datos actualizados obtenidos tras la  |
    | inserción.                                                               |
    |=========================================================================*/

    return null;
  }
}
