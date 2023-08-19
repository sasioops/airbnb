import '../App.js'
//import star from'/images/star.png'
export default function Card(props){
  let badgeText
  if(props.item.openSpots === 0){
    badgeText='Sold Out'
  }
  else if(props.item.location === 'Online') {
    badgeText= 'Online'
  }

    return(
        <div className = 'card'>
          {
            badgeText && 
            <div className="card-badge">{badgeText}</div>
            
          }
            <img  className="card-img1" src = {`./images/${props.item.coverImg}`} />
            <div className = " card-stats">
              <img width = "14px" className="card-star" src='/images/star.png' />
              <span>{props.item.stats.rating}</span>
              <span>({props.item.stats.reviewCount}) • </span>
              <span>{props.item.location}</span>
            </div>
          
            <p className="card--title">
            {props.item.title}
            </p>
            <p className="card--price">
            From ${props.item.price}/person
            </p>
         </div>      
           
    )
}
