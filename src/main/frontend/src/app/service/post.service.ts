import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/posts';
    // this.baseUrl = 'https://blog-app-v1-tagname.onrender.com/api/posts';
  }

  public findAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  public savePost(post: Post): Observable<Post> {
    console.log('this post: ', post);
    return this.http.post<Post>(this.baseUrl, post);
  }

  // Like a post
  likePost(postId: string): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${postId}/like`, {});
  }

  // Dislike a post
  dislikePost(postId: string): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${postId}/dislike`, {});
  }

  // getPosts() {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
  //   return this.http.get(this.apiUrl, { headers });
  // }
}
