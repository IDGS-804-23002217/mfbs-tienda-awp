
function TituloPagina(){
    return(
        <div>
            <h1><center>GALERIA IMAGENES </center></h1>
        </div>
    )
}

function SubtituloPagina(){
    return(
        <div>
            <h2><center>DE ABARROTERA</center></h2>
        </div>
    )
}

function Imagen(enlace){
    return(
        <img
            src={enlace.link}
            alt="abarrotes"
            width="200"
            height="200"
        />
    )
}

function Galeria(){
    return(
        <div>

          <div className="row">

            <div className="col-md-4" >
                <Imagen link="/imagenes/ARROZ.jpeg" />
                <h3><center>Arroz</center></h3>
            </div>

            <div className="col-md-4">
                <Imagen link="/imagenes/AZUCAR.jpeg" />
                <h3><center>AZUCAR</center></h3>
            </div>

            <div className="col-md-4">
                <Imagen link="/imagenes/CEREAL.jpeg" />
                <h3><center>CEREAL</center></h3>
            </div>

            <div className="col-md-4">
                <Imagen link="/imagenes/FRIJOLES.jpeg" />
                <h3><center>FRIJOLES</center></h3>
            </div>
          
            <div className="col-md-4">
                <Imagen link="/imagenes/MAIZENA.jpeg" />
                <h3><center>MAIZENA</center></h3>
            </div>

            <div className="col-md-4">
                <Imagen link="/imagenes/NUTELLA.jpeg" />
                <h3><center>NUTELLA</center></h3>
            </div>
        </div>
        </div>
    )
}


function mensajeCargando(){

     <div className="container text-center mt-5">

            <h1>Abarrotera</h1>

            <p>Cargando la galería...</p>

        </div>


}


function iniciarGaleria(){

    mensajeCargando()

    setTimeout(() => Galeria(), 3000)

}



function App(){
    return(
        <div>

          <iniciarGaleria />

            <TituloPagina />

              <SubtituloPagina />

            <Galeria />

        </div>
    )
}

export default App



