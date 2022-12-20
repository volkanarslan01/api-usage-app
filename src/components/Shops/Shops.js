import "../Shops/Shops.css";

const Shops = ({ shops }) => {
  return (
    <>
      <div className="box">
        {shops.map((shop) => {
          const { title, price, description, category, image, id } = shop;
          return (
            <div className="inbox" id={id}>
              <h2>{title}</h2>
              <img src={image} alt="img"></img>
              <h3>{category}</h3>
              <p>{description}</p>
              <h4>{price}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shops;
