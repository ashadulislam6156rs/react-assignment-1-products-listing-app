import Product from "./Product";

function Products({ products }) {
    const product = products.map((product, id) => (
    <Product key={id} product={product} />
      ));
   return (
    <div className="products">
          {product}
    </div>
  );
}

export default Products;
