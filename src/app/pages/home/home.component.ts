import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestVideos: Video[] = [];
  loading = true;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.loadLatestVideos();
  }

  loadLatestVideos(): void {
    this.youtubeService.getVideos().subscribe({
      next: (data) => {
        console.log(data)
        this.latestVideos = data.slice(0, 6);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading videos:', error);
        this.loading = false;
      }
    });
  }
}
