import React from "react"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import Header from "../Components/Header";
import classBasedComponent from "../Components/classBasedComponent"
import stateLessComponent from "../Components/statelessComponent"
const AppRouter = () =>{
    return(
            <BrowserRouter>
                <div>
                    {/*<Header/>*/}
                    <Switch>
                        <Route path="/class" component = {classBasedComponent} />
                        <Route path="/stateless" component = {stateLessComponent}/>
                    </Switch>
                </div>
            </BrowserRouter>

    )
}

export default AppRouter