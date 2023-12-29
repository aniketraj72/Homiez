import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);

  console.log(file);
  
  console.log(filePerc);
  console.log(fileUploadError);
  console.log("formData: ");
  console.log(formData);
  //firebase storage
  // allow read;
  // allow write: if
  // request.resource < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress));
      console.log(progress);
      console.log(snapshot);
    });
    uploadTask.catch((error) => {
      setFileUploadError(true);
      console.log(error);
    });
    uploadTask.then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setFormData({ ...formData, avatar: downloadURL });
        console.log("downnloadurl");
      });
    });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4" action="">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={formData.avatar || currentUser.avatar}
          onClick={() => fileRef.current.click()}
          alt=""
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image Upload (image must be less than 2mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image Successfully Uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 p-3 rounded-lg uppercase text-white hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}

export default Profile;
