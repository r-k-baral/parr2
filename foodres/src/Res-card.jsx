import React from 'react'
import dish from'./assets/dish.jpg'
import"./Res-card.css"

const ResCard = () => {
  return (
    <div>
      
      <div className='cardtop'>
        <img src={dish} alt=" south indian food"  className='img-card'/>
        <h3>South Indian</h3>
        <h4>🌟 🌟 🌟 🌟</h4>
        <p>Enjoy the rich flavors of South India with traditional dishes like masala dosa, idli, vada, uttapam, and aromatic filter coffee</p>
        <div className='time'>
            <h5>🌟 4.4 </h5>
            <h5>🕛38 min</h5>
            <h5>🟢 pure veg </h5>
        </div>
         <button className='prize'>₹. 300</button>

      </div>
    </div>
  )
}

export default ResCard
