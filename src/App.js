import './styles/App.css';
import PreNavbar from './components/PreNavbar'
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProducts from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import data from "./data/data.json"
function App() {
  return ( 
  <Router>
     <PreNavbar/>
     <Navbar/>
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS"/>
     <StarProducts starProduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu />
{/* exact means that exact link = /music  */}
    <Routes>
        <Route exact path='/music' element={
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
        }>
        </Route>
        <Route exact path='/smartDevice' element={
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
        }>
        </Route>
        <Route exact path='/home' element={
          <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
        }>
        </Route>
        <Route exact path='/lifestyle' element={
          <HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />
        }>
        </Route>
        <Route exact path='/mobileAccessories' element={
          <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
        }>
        </Route>
     </Routes>
     <Heading text="PRODUCT REVIEWS"/>
     <ProductReviews productReviews={data.productReviews}/>
     <Heading text="VIDEOS"/>
  </Router>
  );
}
 
export default App;
