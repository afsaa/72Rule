import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontFamily:'Roboto, sans-serif' }}>
        <h1>Regla del 72</h1>
        <h3>La regla del 72 es un cálculo que se realiza para saber cuanto tiempo nos toma doblar una inversión. Teniendo en cuenta: </h3>
        <p>1. El rendimiento anual deseado. Ej:6% y <br />
           2. La cantidad invertida. Ej: 100 USD<br />
           Multiplicando estas dos variables obtendríamos aproximadamente el número de años necesarios para doblar esa inversión.
        </p>
        <h2>Como decía Albert Einstein: "El interés compuesto es la octava maravilla del mundo. El que lo entiende se beneficia... El que no... lo paga"</h2>
      </div>
    );
  }
}

export default App;
