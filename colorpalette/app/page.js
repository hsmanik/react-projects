"use client";
import { DisplayImage } from "@/components/DisplayImage";
import { MdUploadFile } from "react-icons/md";
import ColorThief from "colorthief";
import { useState } from "react";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setcolorPalette] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 8);
        setUploadedImage(event.target.result);
        setcolorPalette(colorPalette);
        // console.log(colorPalette);
      };
      img.src = event.target.result;
    };
    //console.log(reader);

    reader.readAsDataURL(file);
  };
  return (
    <div className=" bg-stone-900 text-gray-300 h-full">
      <header className=" px-16 py-4  w-full h-32 bg-zinc-800 shadow border-b-2 border-gray-500 flex items-center justify-between">
        <h1 className="font-bold text-5xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Palette Generator
        </h1>
        <div className="flex items-center justify-center">
          <label
            htmlFor="file"
            className=" border rounded-lg py-2 cursor-pointer px-3 hover:bg-zinc-600 flex items-center gap-2 "
          >
            <MdUploadFile className=" text-xl"></MdUploadFile>
            Upload Image
          </label>
          <input type="file" id="file" hidden onChange={uploadImage} />
        </div>
      </header>
      <main className=" min-h-[90vh] px-1 py-1 mt-16 items-center justify-center">
        <DisplayImage
          uploadedImage={uploadedImage}
          colorPalette={colorPalette}
        />
      </main>
    </div>
  );
}
