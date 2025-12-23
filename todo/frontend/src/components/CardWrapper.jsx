export function CardWrapper({children}){
    return <div style={{
        border:"2px solid black",
        margin:"4px",
        padding:"4px",
        background:"gray ",
        textAlign:"center"
      }
    }>
       {children}
    </div>

}