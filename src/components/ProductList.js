import { Product } from './Product';
import './ProductList.css';

export const ProductList = (props) => {
  return (
    <>
      <section>
        <ul>
          {props.products.map((product) => (
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              in_stock={product.in_stock}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
