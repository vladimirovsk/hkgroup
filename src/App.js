import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Glavn from "./component/Glavn/Glavn"
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import './App.css';
import Investor from "./component/Investor/Investor";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact"

const App=()=> {
     let myRoute = (
             <Switch>
                 <Route exact={true} path="/" render={()=><Investor />}/>
                 <Route exact={true} path="/about" render={()=><About />}/>
                 <Route exact={true} path="/home" render={()=><Glavn />}/>
                 <Route exact={true} path="/kontakt" render={()=><Contact />}/>
                 <Route path="/poleska"/>
                 <Redirect to={'/'} />
             </Switch>
     )

    return (
        <div className="App">
            <Header />
                {myRoute}
            <Footer />
        </div>
    )
}

export default App;
