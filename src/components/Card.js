import '../App.js'
import img1 from '../images/image-12.png' 
import star from'../images/star.png'
export default function Card(){
    return(
        <div className = 'card'>
            <img  className="card-img1" src = {img1} />
            <div className = " card-stats">
              <img width = "14px" className="card-star" src={star}/>
              <span>5</span>
              <span>(06) • </span>
              <span>USA</span>
            </div>
          
            <p>
            Life Lessons with Katie Zaferes
            </p>
            <p>
            From $136/person
            </p>
         </div>      
           
    )
}