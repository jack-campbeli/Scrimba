import Intro from './intro'
import Description from './description'
import ButtonGroup from './buttons/button_group'
import gradImage from '../assets/grad.jpg'
import Footer from './footer'

function Card() {
  return (
    <div className="card">
        <img className="card__profile-image" src={gradImage} alt="Profile Image" />
        <ButtonGroup />
        <Intro />
        <Description />
        <Footer />
    </div>
  )
}

export default Card;