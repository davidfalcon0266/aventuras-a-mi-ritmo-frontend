export interface Video {
  id: {
    videoId: string;
  }
  snippet: {
    title: string;
    thumbnails: {
      high: {
       url: ''
      }
    }
    description: string;
  }
  publishedAt: Date;
  views?: number;
  likes?: number;
  category?: string;
}
