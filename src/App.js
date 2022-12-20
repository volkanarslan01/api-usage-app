import { useEffect, useState } from "react";
import SearchField from "./components/SearchField/SearchField.js";
import ShopList from "./components/Shops.list/Shops.list.js";

const App = () => {
  const [shops, setShops] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(shops);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setShops(json));
  }, []);

  // useEffect(() => {
  //   const newFilter = shops.filter((shop) => {
  //     return shop.title.toLocaleLowerCase().includes(search);
  //   });
  //   setFilter(newFilter);
  // }, [shops, search]);

  useEffect(() => {
    const newFiltere = shops.filter((shop) => {
      return shop.title.toLocaleLowerCase().includes(search);
    });
    setFilter(newFiltere);
  }, [shops, search]);

  const onSearchChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    console.log(search);
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
