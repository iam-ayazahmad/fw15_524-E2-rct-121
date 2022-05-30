import {Routes,Route,Link} from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { PageOne } from "./RegisterPageOne"
import { PageTwo } from "./RegisterPageTwo"

export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/register/one" element={<PageOne/>}></Route>
        <Route path="/register/two" element={<PageTwo/>}></Route>
      </Routes>
        </div>
    )
}