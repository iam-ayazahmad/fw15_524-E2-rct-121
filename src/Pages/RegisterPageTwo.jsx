import { Link } from "react-router-dom"


export const PageTwo=()=>{
    return(
        <div style={
            {
                width:"80%",
                height: "400px",
                margin: "5% 10%",
                backgroundColor:"#2cb99a",
                border: "5px solid black"
            }
        }>
            <h1>Page 2</h1>
            <form>
                <input style={{padding:"10px"}} type="text"  placeholder="address"/>
                <input style={{padding:"10px"}} type="number" placeholder="phone" />
                <Link style={{padding:"10px",textDecoration:"none"}} to="/register/one">prev</Link>
               
                <input style={{padding:"10px"}} title="Submit" type="submit" />
            </form>
            
        </div>
    )
}