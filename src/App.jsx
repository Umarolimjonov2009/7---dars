import './App.css'
import Infocard from './components/infocard/Infocard'
import Usercard from './components/usercard/Usercard'

function App() {
  return (
    <div>
      <div>
      <Usercard ismi="Emily Johnson" ishi="Product Manager" joyi="Product Development"/>
      <Usercard ismi="Arjun Patel" ishi="Software Engineer" joyi="Technology"/>
      <Usercard ismi="Carlos Hernández" ishi="UI Designer" joyi="Design"/>
      <Usercard ismi="Amina Idris" ishi="Marketing Specialist" joyi="Marketing"/>
      </div>
      <div>
        <Infocard yozuvi="Unraveling the Mysteries of the Ocean" yozuvi2="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."></Infocard>
        <Infocard yozuvi="Discovering the World of Mountains" yozuvi2="In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "></Infocard>
        <Infocard yozuvi="Unraveling the Mysteries of the Ocean" yozuvi2="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."></Infocard>
        <Infocard yozuvi="Exploring the Secrets of the Forest" yozuvi2="Step into the mesmerizing realm of the forest, a sanctuary of life teeming with a symphony of sounds, scents, and vibrant green hues. "></Infocard>
      </div>
    </div>
  )
}

export default App