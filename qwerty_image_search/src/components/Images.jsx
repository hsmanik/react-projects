import { useContext } from "react";
import { ImageContext } from "../App";
import { Image } from "./Image";
import { Skeleton } from "./Skeleton";

export const Images = () => {
  const { response, isLoading } = useContext(ImageContext);
  return (
    <div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </div>
  );
};