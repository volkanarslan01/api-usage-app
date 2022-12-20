const Shops = ({ shops }) => {
  return (
    <>
      {shops.map((shop) => {
        const { title, price, description, category, image } = shop;
        return (
          <div>
            <h2>{title}</h2>
            {/* <img src={image} alt="image"/> */}
            <p>{description}</p>
            <h3>{category}</h3>
            <h3>{price}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Shops;
