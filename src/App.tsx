import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import PetApi from "./components/PetApi/PetApi";
import { usePetStore } from "./hooks/usePetStore";

const PET_STORE_URL = "https://petstore.swagger.io/v2/swagger.json";

function App() {
  const petStore = usePetStore(PET_STORE_URL);

  if (!petStore) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Header info={petStore.info} />
      <PetApi tags={petStore.tags} paths={petStore.paths} />
      <Footer info={petStore.info} />
    </div>
  );
}

export default App;
