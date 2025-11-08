import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavigationBar/NavBar'

function RootLayout() {

  return (
    <div>
         <NavBar />
            <div className="container" style={{minHeight:'90vh'}}>
                <Outlet />
            </div>
        <Footer />
    </div>
  )
}

export default RootLayout