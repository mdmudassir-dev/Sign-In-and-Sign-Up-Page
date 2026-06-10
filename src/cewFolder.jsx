export default function Propes(props){
    return(
        <div>
            <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
            <h1>{props.name}</h1>
          
        </div>
    );
}