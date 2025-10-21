import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/videos`);
  }

  getVideoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/videos/${id}`);
  }

  getCachedVideos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/videos/cached`);
  }

  getPlaylists(): Observable<any> {
    return this.http.get(`${this.apiUrl}/playlists`);
  }

  getPlaylistVideos(playlistId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/playlists/${playlistId}/videos`);
  }
}
