export interface Playlist {
    id: string;
    snippet: {
        title: string;
        description: string;
        videoCount: number;
        thumbnails: {
            medium: {
                url: ''
            }
        }
    }
}
