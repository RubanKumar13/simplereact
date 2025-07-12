import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import New from './New'
// import {Home,Home1,About} from './Home.jsx'
// import About from './About.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import Hooks from '../Hooks';
// import Comp1 from './wocontext/Comp1';
// import Wcomp1 from './withcontext/Wcomp1';
// import Callback from './UseCallback/Callback';
// import Usememo from './UseMemo/Usememo';
// import Usereducer from './Usereducer/Usereducer';
// import Custom from './Custom/Custom';
// import WithCustom from './Custom/WithCustom';
// import Navbar from './Navbar.jsx';
// import Getapi from './Getapi.jsx';
// import Get from './Get2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home></Home> */}
    {/* <Home1 /> */}
    {/* <About />  */}
    <New/>
    {/* <Navbar />
    <Navbar /> */}
    {/* <Getapi /> */}
    {/* <Get /> */}
    {/* <Hooks /> */}
    {/* <Comp1 /> */}
   {/* <Wcomp1 /> */}
   {/* <Callback /> */}
   {/* <Usememo /> */}
   {/* <Usereducer /> */}
   {/* <Custom /> */}
   {/* <WithCustom /> */}
  </StrictMode>,
)
