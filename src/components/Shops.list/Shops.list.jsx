import Shops from "../Shops/Shops.jsx";
import "./Shops.list.css";
const ShopsList = ({ shops }) => (
  <div className="card-list">
    {shops.map((shop) => {
      const { id } = shop;
      return <Shops shops={shop} id={id} />;
    })}
  </div>
);
export default ShopsList;
