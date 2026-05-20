
import "./CartaoPerfil.css"


function CartaoPerfil () {
    const nome = "Diego cezar"
    const cargo = "instrutor do Senac RJ"
    const bio = "meu nome eh arthur eu tenho 21 anos e sou estudando de html css e java script"
    const habilidade = "javascript"
    return (
    
        <div className= "cartao">
            <img className="cartao-foto"
            src="https://placehold.co/100x100"
            alt={`foto de ${nome}`}
            />
            
            <h2 className="cartao-nome">{nome}</h2>
            <p className="cartao-cargo">{cargo}</p>
            <p className="cartao bio">{bio}</p>
           
        </div>
    )
}

export default CartaoPerfil