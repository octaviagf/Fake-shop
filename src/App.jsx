import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Data />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fake Shop</h1>
    </div>
  );
}

function Data() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);
  return (
    <div className="main">
      <h2>Our products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <img src={product.image} />
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h2>Contact us</h2>
      <p>@fakestore</p>
      <p>809 - 860 - 8965</p>
      <p>info@fakestore.com</p>
    </div>
  );
}
