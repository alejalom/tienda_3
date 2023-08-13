import React from "react";
import { Link } from "react-router-dom";
import Apples from "../imgs/apples.jpg";
import Fresas from "../imgs/fresas.jpg";
import Peras from "../imgs/peras.jpg";
import Durazno from "../imgs/durazno.jpg";
import Leche from "../imgs/leche.png";
import Yogurt from "../imgs/yogurt.jpg";
import Mozzarella from "../imgs/quesomoza.jpg";
import  Quesito from "../imgs/queso_camp.jpg";
import Arroz from "../imgs/arroz.jpeg"
import Frijoles from "../imgs/frjoles.jpeg";
import Lenteja from "../imgs/lentejas.jpeg";
import Maiz from "../imgs/maiz.jpeg";
import Cerdo from "../imgs/carnecer.jpg";
import Res from "../imgs/carneres.jpg";
import Molida from "../imgs/carnemolida.png";
import Pechuga from "../imgs/bandepchu.jpg";

const Home = () => {
  return (
    <div>
        <h1>Esta es la pagina princila del mercado</h1>
      <div className="container text-center">
        <div className="row">

          <div className="col">
            <div className="card mb-2">
              <img src={Apples} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Manzana roja</h5>
                <p className="card-text">
                 $4.500 1lb 
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-2">
              <img src={Fresas} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fresas</h5>
                <p className="card-text">
                  $4.000 1kg
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-2">
              <img src={Peras} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Peras</h5>
                <p className="card-text">
                  $5.500 1lb 
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
         </div>

          <div className="col">
            <div className="card mb-2">
              <img src={Durazno} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Durazno</h5>
                <p className="card-text">
                  $3.700 1lb
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div> 




      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card mb-2">
              <img src={Leche} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">leche</h5>
                <p className="card-text">
                  $6.500 1.000lm
                  </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-2">
              <img src={Yogurt} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Yogurt</h5>
                <p className="card-text">$8.500 1lt</p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        
          <div className="col">
            <div className="card mb-2">
              <img src={Mozzarella} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Queso Mozzarrella</h5>
                     <p className="card-text">
                        $11.500 30tj
                     </p>
                      <Link href="#" className="btn btn-primary">
                        Go somewhere
                      </Link>
                 </div>
             </div>
          </div>

           <div className="col">
             <div className="card mb-2">
               <img src={Quesito} className="card-img-top rounded mx-auto d-block mt-2"  style={{width: "100px", height: "100px"}}alt="..." />
               <div className="card-body">
                 <h5 className="card-title">Queso Campesino</h5>
                 <p className="card-text">$7.000 250g</p>
                   <Link href="#" className="btn btn-primary">
                   Go somewhere
                   </Link>
                </div>
             </div>
           </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card mb-2">
              <img src={Arroz} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Arroz</h5>
                <p className="card-text">
                  $3.000 1kg
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-2">
              <img src={Frijoles} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Frijoles</h5>
                <p className="card-text">
                  $2.800 500g
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        
          <div className="col">
            <div className="card mb-2">
              <img src={Lenteja} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Lenteja</h5>
                     <p className="card-text">
                        $2.500 2lb
                     </p>
                      <Link href="#" className="btn btn-primary">
                        Go somewhere
                      </Link>
                 </div>
             </div>
          </div>

           <div className="col">
             <div className="card mb-2">
               <img src={Maiz} className="card-img-top rounded mx-auto d-block mt-2"  style={{width: "100px", height: "100px"}}alt="..." />
               <div className="card-body">
                 <h5 className="card-title">Maiz</h5>
                 <p className="card-text">
                   $2.000 1kg
                 </p>
                   <Link href="#" className="btn btn-primary">
                   Go somewhere
                   </Link>
                </div>
             </div>
           </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card mb-2">
              <img src={Res} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Carne de Res</h5>
                <p className="card-text">
                  $18.000 1lb
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-2">
              <img src={Pechuga} className="card-img-top rounded mx-auto d-block" style={{width: "100px", height: "100px" }} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bandeja de Pechuga</h5>
                <p className="card-text">
                  $12.500 1lb
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        
          <div className="col">
            <div className="card mb-2">
              <img src={Molida} className="card-img-top rounded mx-auto d-block mt-2" style={{width: "100px", height: "100px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Carne Molida</h5>
                     <p className="card-text">
                        $8.000 1lb
                     </p>
                      <Link href="#" className="btn btn-primary">
                        Go somewhere
                      </Link>
                 </div>
             </div>
          </div>

           <div className="col">
             <div className="card mb-2">
               <img src={Cerdo} className="card-img-top rounded mx-auto d-block mt-2"  style={{width: "100px", height: "100px"}}alt="..." />
               <div className="card-body">
                 <h5 className="card-title">Carne de Cerdo</h5>
                 <p className="card-text">
                   $15.400 1lb
                 </p>
                   <Link href="#" className="btn btn-primary">
                   Go somewhere
                   </Link>
                </div>
             </div>
           </div>
        </div>
      </div>

      

      
    
      
      











      

        
      
    </div>
  )  
}    
  
  

export default Home