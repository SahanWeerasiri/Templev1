import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAlbums } from '../api/api';
import Footer from '../components/Footer';

interface Album {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const Home: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([
    // {
    //   id: '1',
    //   title: 'Mountain Adventure', 
    //   description: 'Experience the thrill of mountain climbing and breathtaking views.',
    //   imageUrl: 'https://storage.googleapis.com/a1aa/image/7k7B1FpmgfUfx02JBjkhdsOdUTWjPeAorQxybX5Zei2L5MBPB.jpg',
    // },
    // {
    //   id: '2',
    //   title: 'Beach Party',
    //   description: 'Fun times with friends at the beach, with games and music.',
    //   imageUrl: 'https://storage.googleapis.com/a1aa/image/WMhXummFkd7tA5cfULGcGnfJkAJvGTd9TsSqXqr4OJuNOTwTA.jpg',
    // },
    // {
    //   id: '3',
    //   title: 'Family Picnic',
    //   description: 'A relaxing day out in the park with family and loved ones.',
    //   imageUrl: 'https://storage.googleapis.com/a1aa/image/w6re3hVltywxX6LCwFSF5FWWIzensIGCvriIlclV3VCUOTwTA.jpg',
    // },
    // {
    //   id: '4',
    //   title: 'Romantic Dinner',
    //   description: 'A special evening with a loved one, filled with romance and good food.',
    //   imageUrl: 'https://storage.googleapis.com/a1aa/image/icufgYyslBV3CK2ev3HBXVMWrXR3V29zd1kjwV1iy2uPOTwTA.jpg',
    // },
    // {
    //   id: '5',
    //   title: 'Forest Hike',
    //   description: 'Exploring the beauty of nature on a forest hike.',
    //   imageUrl: 'https://storage.googleapis.com/a1aa/image/633sEeUhUvRYTCfs6w2tH5fkec9EDqFtNbWOty3Y6Hqa5MBPB.jpg',
    // },
    // {
    //   id: '6',
    //   title: 'City Lights',
    //   description: 'The vibrant nightlife and stunning cityscape views.',
    //   imageUrl: 'https://storage.googleapis.com/a1aa/image/FCWIVOBlxfQ6LqeggIwUzI7DRnCInFc5MG4IcgoRreUqcmgnA.jpg',
    // },
  ]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const fetchedAlbums = await getAlbums();
      setAlbums(fetchedAlbums as Album[]);
    };
    fetchAlbums();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen" style={{paddingLeft: '20px', paddingRight: '20px', marginTop: '60px', marginBottom: '60px', backgroundColor: '#ffffff'}}>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={album.imageUrl}
                alt={album.title}
                className="w-full h-64 object-cover mx-auto"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{album.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{new Date(album.date).toLocaleDateString()}</p>
                <p className="text-gray-700 mb-4">{album.description}</p>
                <Link 
                  to={`/album/${album.id}`}
                  state={{ albumId: album.id }}
                  className="text-blue-600 hover:underline"
                >
                  View Album
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
