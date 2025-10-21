export interface Video {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: Date;
  views?: number;
  likes?: number;
  category?: string;
}
