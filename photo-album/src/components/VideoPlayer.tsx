import { useEffect } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayer = ({ videoUrl, isOpen, onClose }: VideoPlayerProps) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative">
        <button 
          className="text-red-600 absolute top-2 right-2" 
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <iframe
          src={videoUrl}
          className="w-full h-96"
          allowFullScreen
          title="Video player"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;