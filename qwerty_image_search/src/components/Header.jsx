export const Header = ({ children }) => {
  return (
    <div className=" bg-gray-800 flex items-center py-10">
      <div className=" max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-3">
          Find Images
        </h1>

        {children}
      </div>
    </div>
  );
};
