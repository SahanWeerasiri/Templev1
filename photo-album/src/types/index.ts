export interface Photo {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    downloadUrl: string;
    isVideo?: boolean;
  }
  
  export interface Album {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    photos: Photo[];
  }