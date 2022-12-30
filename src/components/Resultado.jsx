import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`
const Texto = styled.p`
    color: #FFF;
    font-size: 16px;
    span {
        font-weight: 700;
        color: #b2b5fd;
        
    }
    
`

const Precio = styled.p`
    color: #FFF;
    font-size: 20px;
    span {
        font-weight: 700;     
        color: #89ddf9;
    }
    
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen criptomoneda"
             />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
        
      
    </Contenedor>
  )
}

export default Resultado
