import { ListItem } from "./ListItem";

export const DisplayImage = ({ uploadedImage, colorPalette }) => {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
  return (
    <div className=" flex items-center justify-center flex-col gap-2">
      <div className=" h-80 w-[42rem] flex items-center justify-center border rounded-md border-solid ">
        {uploadedImage ? (
          <img
            className=" object-cover object-center w-full h-full transition-opacity duration-200 ease-in-out"
            src={uploadedImage}
            alt="uploaded"
          />
        ) : (
          <h2>Put an image here...</h2>
        )}
      </div>
      {colorPalette && (
        <ul className=" flex items-center justify-center flex-wrap gap-3 mt-3">
          {colorPalette.map((color, index) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;
            // console.log(rgb, hex);
            return <ListItem key={index} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
};
