import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { Photo } from '../types';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIcevf9oKkzCaJKVXfgQmRfNoreMsoNos",
    authDomain: "temple-events-30cb9.firebaseapp.com",
    projectId: "temple-events-30cb9",
    storageBucket: "temple-events-30cb9.firebasestorage.app",
    messagingSenderId: "681070320920",
    appId: "1:681070320920:web:f05a7e403af51c8c43d26d",
    measurementId: "G-WKBT7CCTY5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get all albums
export const getAlbums = async () => {
    try {
      const albumsCollection = collection(db, 'Temple');
      const albumSnapshot = await getDocs(albumsCollection);
      const sortedDocs = albumSnapshot.docs.sort((a, b) => {
        const dateA = new Date(a.data().date);
        const dateB = new Date(b.data().date);
        return dateB.getTime() - dateA.getTime(); // Sort in descending order (newest first)
      });
      if (sortedDocs.length === 0) {
        throw new Error('Failed to fetch albums');
      }
      // Use console.log for easier debugging in dev tools
      return sortedDocs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error fetching albums:', error);
      throw error;
    }
  };

// Get photos for a specific album
export const getAlbumPhotos = async (albumId: string): Promise<Photo[]> => {
  try {
    const photosCollection = collection(db, `Temple/${albumId}/photos`);
    const photoSnapshot = await getDocs(photosCollection);
    return photoSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Photo[];
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
// Get single album details
export const getAlbumDetails = async (albumId: string) => {
  try {
    const albumDoc = doc(db, 'Temple', albumId);
    const albumSnapshot = await getDoc(albumDoc);
    if (albumSnapshot.exists()) {
      return {
        id: albumSnapshot.id,
        ...albumSnapshot.data()
      };
    } else {
      throw new Error('Album not found');
    }
  } catch (error) {
    console.error('Error fetching album details:', error);
    throw error;
  }
};
