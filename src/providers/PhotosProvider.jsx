import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { API_URL, PHOTOS_LIMIT } from "../utils/constants";

// create contex

export const PhotosContex = createContext(null);

// create provider

export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/photos?_limit=" + PHOTOS_LIMIT)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <PhotosContex.Provider value={photos}>{children}</PhotosContex.Provider>
  );
};
