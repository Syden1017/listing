import Listing from "./components/Listing/Listing";
import etsy from "./data/etsy.json";
import "./App.css";

function App() {
  const jsonString = JSON.stringify(etsy);
  const data = JSON.parse(jsonString);

  return <Listing items={data} />;
}

export default App;
