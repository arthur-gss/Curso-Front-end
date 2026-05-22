// src/components/CartaoPerfil.jsx
import "./CartaoPerfil.css"; // Importa o CSS sem dar um nome a ele

function CartaoPerfil({ imagem, nome, cargo, bio}) {
  return (
    <div className="cartao">
      <img 
        className="cartao-foto" 
        src={imagem} 
        alt={`Foto de ${nome}`} 
      />
      <h3 className="cartao-nome">{nome}</h3>
      <p className="cartao-cargo">{cargo}</p>
      <p className="cartao-bio">{bio}
         
      </p>
    </div>
  );
}

export default CartaoPerfil;