import "./Products.css";
import ProductList from '../Components/ProductList';

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container"> {result} </section>
    </>
  );
};

export default Products;