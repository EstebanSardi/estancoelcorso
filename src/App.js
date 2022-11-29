import banner from './images/banner.jpg';
import './App.css';

//IMPORTAR COMPONENTES
import CompMostrarClientes from './clientes/MostrarClientes';
import CompCrearClientes from './clientes/CrearClientes';
import CompEditarClientes from './clientes/ModificarClientes';


import CompMostrarProvedores from './provedores/MostrarProvedores';
import CompCrearProvedores from './provedores/CrearProvedores';
import CompEditarProvedores from './provedores/ModificarProvedores';


import CompMostrarProductos from './productos/MostrarProductos';
import CompCrearProductos from './productos/CrearProductos';
import CompEditarProductos from './productos/ModificarProductos';

//IMPORTAR EL ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom';







function App() {
  return (
    <div className="App">
      <header className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div class="container-fluid">
            <a class="navbar-brand inactive">EL CORSO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/clientes">Clientes</a>
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/provedores">Provedores</a>
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/productos">Productos</a>
              </div>
            </div>
          </div>
        </nav>
        <img src={banner} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/clientes/' element={<CompMostrarClientes />} />
          <Route path='/clientes/agregar' element={<CompCrearClientes />} />
          <Route path='/clientes/editar/:id' element={<CompEditarClientes />} />

          <Route path='/provedores/' element={<CompMostrarProvedores />} />
          <Route path='/provedores/agregar' element={<CompCrearProvedores />} />
          <Route path='/provedores/editar/:id' element={<CompEditarProvedores />} />

          <Route path='/productos/' element={<CompMostrarProductos />} />
          <Route path='/productos/agregar' element={<CompCrearProductos />} />
          <Route path='/productos/editar/:id' element={<CompEditarProductos />} />

        </Routes>

      </BrowserRouter>
      <body>
        
      </body>
    </div>
  );
}

export default App;
