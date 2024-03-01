export function ItemCardapio(props) {
    return <div className="container-item-cardapio">
          <div>
            <h2>{props.name}</h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
          </div>
          <img src={props.imagem} alt="" />
        </div>
    
}