import NavBar from '../layouts/navbar/NavBar';
import Footer from '../layouts/footer/Footer';
import Main from './main/Main';
import "./layout.scss"

const Layout= ()=>{
      return(
        <div className="container_app">
          <NavBar />
          <Main />
          <Footer />
       </div>
      )
    }

export default Layout;
