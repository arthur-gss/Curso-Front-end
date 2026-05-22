import './App.css';
// import Exemplo from './components/Exemplo.jsx'
import CartaoPerfil from './components/CartaoPerfil.jsx';
import Header from './components/Header.jsx';
import funcionarios from "./data/funcionario.js"




function App() {
  return (
    <div className=''>
      <div className='header'>
        <Header />
        <div className='app'>
          <h1>Nossa Equipe</h1>
          <div className='grade'>
            {funcionarios.map(funcionario => (
              <CartaoPerfil
                key={funcionario.nome}
                nome={funcionario.nome}
                cargo={funcionario.cargo}
                bio={funcionario.bio}
              />
             )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}




export default App;


