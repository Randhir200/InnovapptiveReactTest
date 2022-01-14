import { useState, useEffect } from 'react';
function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:2000/test')
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <>
      <div className='mystyle'>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {products.map((product) => (
              <>
                <tr key={product._id}>
                  <td> {product.subject}</td>
                  <td> {product.desc}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </p>
      </div>
    </>
  );
}

export default Main;
