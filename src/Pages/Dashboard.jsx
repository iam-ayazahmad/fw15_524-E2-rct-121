import {Link} from "react-router-dom"
export const Dashboard=()=>{
    return(
        <div>
            <div style={{width:"100%",hieght:"300px",backgroundColor:"#aefeed",border:"5px solid green"}}>
                <h1>Dashboard</h1>
                <Link style={{textDecoration:"none",fontSize:"40px"}} to="/register/one">Register</Link>
            </div>
            
        </div>
    )
} 
