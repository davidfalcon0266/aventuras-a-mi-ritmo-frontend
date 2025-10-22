import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[] = [];
  loading = true;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getPlaylists().subscribe({
      next: (data) => {
        this.playlists = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openPlaylist(playlistId: string): void {
    window.open(`https://www.youtube.com/playlist?list=${playlistId}`, '_blank');
  }
}
