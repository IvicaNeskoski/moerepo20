import { useContext } from "react";
import { PhotosContex } from "../providers/PhotosProvider";

export const Gallery = () => {
  const { photos } = useContext(PhotosContex);

  return (
    <div>
      Gallery
      {/* <button onClick={() => setPhotos([])}>Clear Photos</button> */}
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
      {/* <Popup/> */}
    </div>
  );
};
