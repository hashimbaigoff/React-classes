import Banner from "../../Components/Banner";
import Details from "../../Components/Details";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Slider from "../../Components/Slider";

function Home() {
  return (
    <div>
      <Header />
      <Slider heading="Nithin" />
      <Details />
      <Footer />
    </div>
  )
}

export default Home;