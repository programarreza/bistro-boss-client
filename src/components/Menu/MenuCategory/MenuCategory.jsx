import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="pt-12">
      {title && (
        <Cover img={img} title={title} description={description}></Cover>
      )}

      <div className="grid md:grid-cols-2 gap-5 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn mt-12 btn-outline border-0 border-b-4 mx-auto text-center flex">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
