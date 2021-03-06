import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GatewayService} from '../services/gateway.service';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {Filters} from '../models/Filters';

@Injectable({
  providedIn: 'root'
})
export class PostApi {

  constructor(private http: HttpClient,
              private gateway: GatewayService) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.gateway.getAllPosts());
  }

  getPosts(filters: Filters): Observable<Post[]> {
    return this.http.get<Post[]>(
      this.gateway.getPosts(
        filters.limit,
        filters.offset,
        filters.sort,
        filters.desc
      )
    );
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(this.gateway.getPostById(id));
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.gateway.getAllPosts(), post);
  }
}
