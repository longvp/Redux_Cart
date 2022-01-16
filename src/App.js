import React from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';


class App extends React.Component {
  render() {
    return (
      <>
        <div>
          {/* Header */}
          <Header />
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <ProductsContainer />
              {/* Message */}
              <MessageContainer />
              {/* Cart */}
              <CartContainer />
            </div>
          </main>
          {/* Footer */}
          <Footer />
        </div>

      </>
    );
  }
}

export default App;
