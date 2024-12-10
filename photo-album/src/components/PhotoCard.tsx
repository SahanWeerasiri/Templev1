import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  onPhotoClick: (photo: Photo) => void;
}

const PhotoCard = ({ photo, onPhotoClick }: PhotoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="relative cursor-pointer group"
        onClick={() => onPhotoClick(photo)}
      >
        <img 
          src={photo.imageUrl} 
          alt={photo.title}
          className="w-full h-80 object-cover transition-transform group-hover:scale-105 mx-auto"
        />
        {photo.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center w-11/12 h-64 mx-auto">
            <i className="fas fa-play-circle text-white text-4xl opacity-75"></i>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{photo.description}</p>
        <a 
          href={photo.downloadUrl}
          download
          className="mt-3 inline-block text-blue-600 hover:text-blue-800"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-download mr-2"></i>
          Download
        </a>
      </div>
    </div>
  );
};

export default PhotoCard;