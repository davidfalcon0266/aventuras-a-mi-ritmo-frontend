import { Component, Input } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent {
  @Input() videos: Video[] = [];

  openVideo(videoId: string): void {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }
}
