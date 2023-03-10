import { useEffect, useState } from "react";
import SearchField from "./components/SearchField/SearchField.js";
import ShopList from "./components/Shops.list/Shops.list.jsx";
import "./App.css";
const App = () => {
  const [shops, setShops] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(shops);
  useEffect(() => {
    const getShops = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setShops(json));
    };
    getShops();
  }, []);

  useEffect(() => {
    const newFilter = shops.filter((shop) => {
      return shop.title.toLocaleLowerCase().includes(search);
    });
    setFilter(newFilter);
  }, [shops, search]);

  const onSearchChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearch(search);
  };
  return (
    <div className="App">
      <h1>Shops</h1>
      <SearchField onChangeHandler={onSearchChange} className="shops-search" />
      <ShopList shops={filter} />
    </div>
  );
};

export default App;
