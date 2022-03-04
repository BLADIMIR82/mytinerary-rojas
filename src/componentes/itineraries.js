import { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios"
import {useParams} from 'react-router-dom'

export default function Itiniraries() {
  const [data, setData] = useState()
  const {id} = useParams()
  const [expanded, setExpanded] = useState(false);

  const ExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(()=>{
  axios.get(`http://localhost:4000/api/allcities`)
  .then(respuesta=>setData(respuesta.data.response.ciudades.filter(cities => cities._id === id)))
})
    
    return (

      
     <div className='tineraries'>
         {data?.map(evento=>
 <div >
   
   <div className='titletineraries'>
  <h1>Tiltle Tinerary{evento.name}</h1>
  </div>
  <div className='infotineraries'>
  <div className='imageuser'>
  <img  src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
   </div>
  <div>
  <h2>Duration</h2> 
  </div>
  <div>
  <h2>Price</h2> 
  </div>
  <div>
  <h2>Likes</h2> 
  </div>
  <div>
  <h2>hashtag</h2> 
  </div>
  <div>
  <h2>name user</h2>
   </div>
  </div>
  <div className='activities' in={expanded}> 
  <button expand={expanded} onClick={ExpandClick}>view more</button>
  <h1>Activities</h1>
    <div>
      <Swiper
        spaceBetween={15}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
   </div>
    <div className='comments'> 
  <h1>Comments</h1>
    </div>

  </div> 
  )}

     </div>
    );
  }