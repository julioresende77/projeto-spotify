import PropTypes from "prop-types";
import SingleItem from "./SingleItem";
import { Link, useLocation as useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idpath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .slice(0, finalItems) // `.slice()` é mais claro que `.filter()`
          .map((currObj) => (
            <SingleItem idpath={idpath} {...currObj} key={currObj._id} />
          ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  idpath: PropTypes.string.isRequired,
  itemsArray: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string, // Exemplo de outra propriedade
    })
  ).isRequired,
};

export default ItemList;
