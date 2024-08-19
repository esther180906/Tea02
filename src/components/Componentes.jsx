import arduino from "../assets/arduino.svg"
import placa from "../assets/placa.svg"
import blue from "../assets/blue.svg"
import som from "../assets/sensoSom.svg"
import maos from "../assets/maos.svg"


export function Componentes() {
  return (
    <div className="componentes">
      <p className="titulo">MATERIAIS UTILIZADOS</p>
      <h3 className="sub-titulo">O Que usamos para realizar esse projeto?</h3>

       <div className="cards">
          <div className="arduino">
            <div className="card">
              <img src={arduino} alt="" />
              <h3>Arduino R3</h3>
              <p>Placa microcontroladora, o cérebro do sistema</p>
            </div>

            <div className="card">
              <div className="ajuste"><img src={placa} alt="" /></div>
              
              <h3>Display Screen </h3>
              <p>Placa de desenvolvimento, Módulo TFT com toque</p>
            </div>
            
            
          </div>

          <div className="arduino">
            <div className="card">
              <img src={som} alt="" />
              <h3>Sensor Som</h3>
              <p>Módulo Detector Som Microfone Ky-037</p>
            </div>

            <div className="card">
              <div className="ajuste"><img src={blue} alt="" /></div>
              <h3>Bluetooth</h3>
              <p>Módulo Bluetooth Hc-05 Arduino</p>
            </div>
          </div>

          
            
            
 
       </div>

       <div className="imagem">
          <img src={maos} alt="" />
       </div>
    </div>
  )
}
