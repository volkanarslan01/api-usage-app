import { useEffect, useState } from "react";
// import SearchField from "./components/SearchField/SearchField.js";
import Shops from "./components/Shops/Shops.js";

const App = () => {
  const [shops, setShops] = useState([]);
  const [search, setSearch] = useState([]);
  const [filter, setFilter] = useState(shops);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json)
      .then((json) => setShops(json));
  }, []);

  // useEffect(() => {
  //   const newFilter = shops.filter((shop) => {
  //     return shop.title.toLocaleLowerCase().includes(search);
  //   });
  //   setFilter(newFilter);
  // }, [search, shops]);

  // const onSearchChange = (event) => {
  //   const search = event.target.value.toLocaleLowerCase();
  //   setSearch(search);
  // };
  return (
    <>
      <div className="App">
        <h1>Shops</h1>
        {/* <SearchField
          onChangeHandler={onSearchChange}
          className="shops-search"
        /> */}
        <Shops shops={shops} />
      </div>
    </>
  );
};

export default App;
