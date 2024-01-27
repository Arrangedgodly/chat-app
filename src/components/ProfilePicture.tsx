import { handleUploadPhoto, updateUserProfilePicture } from "../lib/firebase";
import { useState, useEffect } from "react";

type ProfilePictureProps = {
 uid: string | null;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ uid }) => {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!photo) return;
    if (!uid) return;
    const result = await handleUploadPhoto(photo, uid);
    const photoPath = result.metadata.fullPath;
    const photoBucket = result.metadata.bucket;
    const photoUrl = `${photoBucket}/${photoPath}`;
    updateUserProfilePicture(uid, photoUrl);
  }

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  }

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [photo]);
  return (
    <>
      <input type="checkbox" id="profile-picture" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col items-center ">
          <h1 className="text-2xl font-bold m-2">
            Upload a new profile picture
          </h1>
          {preview && (
            <img
              className="avatar rounded-full h-32 w-32"
              src={preview}
              alt="Profile"
            />)}
          <input
            type="file"
            className="input file-input file-input-primary file-input-md my-5"
            onChange={handleFileChange}
          />
          <div className="modal-action">
            <label htmlFor="profile-picture" className={photo ? "btn btn-success" : "btn btn-disabled"} onClick={handleUpload}>
              Save
            </label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="profile-picture">
          Close
        </label>
      </div>
    </>
  );
};

export default ProfilePicture;
