import PhotoCard from '../components/PhotoCard';
import PhotoViewer from '../components/PhotoViewer';
import VideoPlayer from '../components/VideoPlayer';
import { Photo } from '../types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAlbumPhotos } from '../api/api';

const Album = () => {
  const location = useLocation();
  const albumId = location.state?.albumId;
  const [selectedMedia, setSelectedMedia] = useState<Photo | null>(null);
  const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);

  // Example data - replace with your actual data fetching logic
  const [photos, setPhotos] = useState<Photo[]>([]);
    // {
    //   id: '1',
    //   title: 'Sample Photo',
    //   description: 'A beautiful landscape',
    //   imageUrl: 'https://firebasestorage.googleapis.com/v0/b/file-browser-f745d.appspot.com/o/Katinaya-2024%2F20241025_193023.jpg?alt=media&token=03aa5e51-6040-4059-a0bc-769995901b22',
    //   downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/file-browser-f745d.appspot.com/o/Katinaya-2024%2F20241025_193023.jpg?alt=media&token=03aa5e51-6040-4059-a0bc-769995901b22',
    //   isVideo: false
    // },
    // {
    //     id: '2',
    //     title: 'Sample Video',
    //     description: 'An exciting video clip',
    //     imageUrl : 'https://firebasestorage.googleapis.com/v0/b/file-browser-f745d.appspot.com/o/Katinaya-2024%2F20241008_183246.mp4?alt=media&token=3c0a4968-22a6-48c7-8ef9-85149d1f2641',
    //     downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/file-browser-f745d.appspot.com/o/Katinaya-2024%2F20241008_183246.mp4?alt=media&token=3c0a4968-22a6-48c7-8ef9-85149d1f2641',
    //     isVideo: true
    //   },
    // // Add more photos...
  // ];

  useEffect(() => {
    const fetchPhotos = async () => {
      if (albumId) {
        const fetchedPhotos = await getAlbumPhotos(albumId);
        setPhotos(fetchedPhotos);
      }
    };
    fetchPhotos();
  }, [albumId]);

  const handleMediaClick = (photo: Photo) => {
    setSelectedMedia(photo);
    if (photo.isVideo) {
      setIsVideoPlayerOpen(true);
    } else {
      setIsPhotoViewerOpen(true);
    }
  };

  return (
    <div className="container mx-auto py-8" style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '60px', marginBottom: '60px', backgroundColor: '#ffffff'}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onPhotoClick={handleMediaClick}
          />
        ))}
      </div>

      {selectedMedia && !selectedMedia.isVideo && (
        <PhotoViewer
          imageUrl={selectedMedia.imageUrl}
          isOpen={isPhotoViewerOpen}
          onClose={() => {
            setIsPhotoViewerOpen(false);
            setSelectedMedia(null);
          }}
        />
      )}

      {selectedMedia && selectedMedia.isVideo && (
        <VideoPlayer
          videoUrl={selectedMedia.imageUrl}
          isOpen={isVideoPlayerOpen}
          onClose={() => {
            setIsVideoPlayerOpen(false);
            setSelectedMedia(null);
          }}
        />
      )}
    </div>
  );
};

export default Album;