import "./App.css";
import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";
import { Images } from "./components/Images";
import { useAxios } from "./hooks/useAxios";
import { createContext } from "react";

// create context
export const ImageContext = createContext();

function App() {
  const { response, isLoading, error, fetchdata } = useAxios(
    `search/photos?page=1&query=random&client_id=${
      import.meta.env.VITE_APP_ACCESS_KEY
    }`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchdata,
  };

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchField />
      </Header>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
