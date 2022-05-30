export const PageOne=()=>{
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
            <h1>Page 1</h1>
            <form>
                <input style={{padding:"10px"}} type="text"  placeholder="username"/>
                <input style={{padding:"10px"}} type="email" placeholder="email" />
                <input style={{padding:"10px"}} title="Next" type="submit" />
            </form>
            
        </div>
    )
}