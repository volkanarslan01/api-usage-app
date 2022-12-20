import Shops from "../Shops/Shops.js";

const ShopsList = ({ shops }) => {
  <div className="card">
    {shops.map((shop) => {
      const { id } = shop;
      return <Shops shops={shop} id={id} />;
    })}
  </div>;
};

export default ShopsList;
