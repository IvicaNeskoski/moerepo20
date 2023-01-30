import { useContext } from "react";
import { PhotosContex } from "../providers/PhotosProvider";

export const Gallery = () => {
  const photos = useContext(PhotosContex);

  return (
    <div>
      Gallery
      <pre>{JSON.stringify(photos, null, 2)}</pre>
    </div>
  );
};
