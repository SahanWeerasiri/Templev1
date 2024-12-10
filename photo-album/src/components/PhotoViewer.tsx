import { useEffect } from 'react';

interface PhotoViewerProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const PhotoViewer = ({ imageUrl, isOpen, onClose }: PhotoViewerProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-w-4xl max-h-[90vh] relative">
        <img 
          src={imageUrl} 
          alt="Enlarged photo" 
          className="max-h-[90vh] max-w-full object-contain"
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default PhotoViewer;