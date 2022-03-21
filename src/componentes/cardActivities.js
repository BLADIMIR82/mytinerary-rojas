
export default function CardActivities() {
    return (
        <div className="activities"> 
        <div>
        <h1>Activities</h1>
        </div>
        <div className="imageactivities">
         <div>
         <img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/imagencalltoaction.jpg`} />
          <h3>tittle1</h3>
         </div>
         <div>
         <img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/imagencalltoaction.jpg`} />
         <h3>tittle2</h3>
         </div>
         <div>
         <img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/imagencalltoaction.jpg`} />
         <h3>tittle3</h3>
         </div>
         </div>
         </div>
        
    );
  }