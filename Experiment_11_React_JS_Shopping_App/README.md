# Experiment 11: React JS Deployment and Simple Shopping App

## Aim

Deploy a React JS application and build a simple online shopping interface using reusable components.

## Deployment Steps

1. Install Node.js (LTS) with npm:
   - <https://nodejs.org/en/download>
2. Verify installation in Command Prompt:
   - `node -v`
   - `npm -v`
3. Move to the target drive/folder and create a React project:
   - `npx create-react-app firstapp`
4. Move into project folder:
   - `cd firstapp`
5. Replace the contents of `src` with the component files from this experiment.
6. Run the app:
   - `npm start`
7. Open browser output at:
   - <http://localhost:3000>

Any change saved in `App.js` or other component files auto-refreshes in development mode.

## Components Used

- Header
- ProductList
- ProductItem
- Cart
- Footer

## File Structure

- `src/App.js`
- `src/Header.js`
- `src/ProductList.js`
- `src/ProductItem.js`
- `src/Cart.js`
- `src/Footer.js`

## Program

### Header.js

```jsx
function Header() {
  return <h1>Online Shopping App</h1>;
}

export default Header;
```

### ProductItem.js

```jsx
function ProductItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: Rs. {props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
```

### ProductList.js

```jsx
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div>
      <ProductItem name="Mobile" price="15000" />
      <ProductItem name="Laptop" price="50000" />
    </div>
  );
}

export default ProductList;
```

### Cart.js

```jsx
function Cart() {
  return <h2>Your Cart is Empty</h2>;
}

export default Cart;
```

### Footer.js

```jsx
function Footer() {
  return <p>Copyright 2026 Shopping App</p>;
}

export default Footer;
```

### App.js

```jsx
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
```

## Output

The page displays:

- Title: Online Shopping App
- Two products: Mobile and Laptop with prices
- Add to Cart buttons
- Cart message: Your Cart is Empty
- Footer text: Copyright 2026 Shopping App
