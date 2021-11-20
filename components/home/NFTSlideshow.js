import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const NFTSlideshow = () => {
  const [images, setImages] = useState(['Aquaman.png', 'Bandit.png', 'Barbarian.png', 'Batman.png', 'Biohazard.png', 'CaptainAmerica.png', 'Cyclops.png', 'Deadpool.png', 'DrStrange.png', 'Flash.png', 'Golfer.png', 'GreenArrow.png', 'GreenLanter.png', 'Hulk.png', 'IronMan.png', 'Jason.png', 'John Wayne.png', 'Kiddo.png', 'LumberJack.png', 'Negan.png', 'Nurse.png', 'Patient.png', 'Pirate.png', 'Priest.png', 'Princess.png', 'Quarterback.png', 'Ranger.png', 'Robin.png', 'RomanSoldier.png', 'ScarletWitch.png', 'Spiderman.png', 'Starlord.png', 'Superman.png', 'SWAT.png', 'Thief.png', 'Thor.png', 'Vision.png', 'Wizard.png', 'Wolverine.png', 'Wonderwoman.png'])

  return (
    <Carousel autoPlay showArrows={false} infiniteLoop swipeable={false} showStatus={false} showIndicators={false} showThumbs={false} useKeyboardArrows={false} stopOnHover={false} animationHandler="fade">
      {images.map((item, i) => (
        <div key={i}>
          <img className="max-h-96 object-contain rounded-3xl border-8 border-white shadow-md m-auto" src={`imgs/slideshow/${item}`} />
        </div>
      ))}
    </Carousel>
  )
}

export default NFTSlideshow
