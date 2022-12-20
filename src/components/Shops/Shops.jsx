import "../Shops/Shops.css";

const Shops = ({ shops }) => {
  const { title, price, description, category, image } = shops;
  return (
    <div className="box">
      <div className="inbox">
        <h2>{title}</h2>
        <img src={image} alt="img"></img>
        <h3>{category}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default Shops;
