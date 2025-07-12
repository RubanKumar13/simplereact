import React from "react"
function Home(){
    return(
        <div>hello from home component</div>
        
    )
}

function Home1(){
    return(
        <h1>hi from home component</h1>
    )
}

class About extends React.Component{
    render(){
        return(
            <h1>hello from home component</h1>
        )
    }
}

export {Home,Home1,About};


