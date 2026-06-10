export default function Price({oldprice,newprice}){
    let style={
        // border: "1px solid black",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        height: "23px",
        width: "290px",
        backgroundColor : "yellow"
    }
    let oldstyle={
        textDecorationLine : "line-Through",
    }
    let newstyle={
        fontWeight : "bold",
    }
    return(
        <div style={style}>
        <span style={oldstyle}>{oldprice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newstyle}>{newprice}</span>
        </div>
    );
}