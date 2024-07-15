import { AboutUs } from "./AboutUs/AboutUs"
import { Footer } from "./Footer/Footer"
import { FooterEnd } from "./Footer/FooterEnd"
import { Header } from "./Header/Header"
import { Services } from "./Servicio/Services"

export const LandingPage = () => {

  return (
    <div className="landing">
        <Header/>
        <Services/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}
