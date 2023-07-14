import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import KlassMenuManager from './pages/KlassMenuManager';
import MalibuMenuManager from "./pages/MalibuMenuManager";
import GriffMenuManager from "./pages/GriffMenuManager";
import GolyaCsardaMenuManager from "./pages/GolyaCsardaMenuManager";
import {useEffect} from "react";
import axios from "axios";
import {restaurantMenu} from "./menuDatabase";
function App() {
  useEffect(()=> {
    axios.get('https://engine.ehesparaszt.com/api/all')
  .then(function (response) {
    // handle success
    console.log(response);
    restaurantMenu.klass.monday = response.data.menus.klass[2].meal;
    restaurantMenu.klass.tuesday = response.data.menus.klass[1].meal;
    restaurantMenu.klass.wednesday = response.data.menus.klass[0].meal;
    restaurantMenu.klass.thursday = response.data.menus.klass[3].meal;
    restaurantMenu.klass.friday = response.data.menus.klass[4].meal;
    restaurantMenu.malibu.monday = response.data.menus.malibu[0].meal;
    restaurantMenu.malibu.tuesday = response.data.menus.malibu[1].meal;
    restaurantMenu.malibu.wednesday = response.data.menus.malibu[2].meal;
    restaurantMenu.malibu.thursday = response.data.menus.malibu[3].meal;
    restaurantMenu.malibu.friday = response.data.menus.malibu[4].meal;
   {/* restaurantMenu.griff.monday = response.data.menus.griff[0].meal;
    restaurantMenu.griff.tuesday = response.data.menus.griff[1].meal;
    restaurantMenu.griff.wednesday = response.data.menus.griff[2].meal;
    restaurantMenu.griff.thursday = response.data.menus.griff[3].meal;
    restaurantMenu.griff.friday = response.data.menus.griff[4].meal;
    restaurantMenu.golya_csarda.monday = response.data.menus.golya_csarda[0].meal;
    restaurantMenu.golya_csarda.tuesday = response.data.menus.golya_csarda[1].meal;
    restaurantMenu.golya_csarda.wednesday = response.data.menus.golya_csarda[2].meal;
    restaurantMenu.golya_csarda.thursday = response.data.menus.golya_csarda[3].meal;
    restaurantMenu.golya_csarda.friday = response.data.menus.golya_csarda[4].meal;*/}
    
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  })
  })
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="klassmenumanager" element={<KlassMenuManager/>}/>
      <Route path="malibumenumanager" element={<MalibuMenuManager/>}/>
      {/*<Route path="griffmenumanager" element={<GriffMenuManager/>}/>
      <Route path="golyacsardamenumanager" element={<GolyaCsardaMenuManager/>}/>*/}
    </Routes>
  </BrowserRouter>
    )
}


export default App;
