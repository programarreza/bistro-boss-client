const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex">
      <img style={{borderRadius: '0 200px 200px 200px'}} src={image} className="w-[118px]" alt="" />
      <div className=" ml-4">
        <div className="flex justify-between">
          <h3 className="uppercase">{name}-----------</h3>
        <p className="text-[#BB8506]">${price}</p>
        </div>
          <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
