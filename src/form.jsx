function formhandler(event){
    console.log(event.defaultPrevented);
    console.log(event);
}

export default function Form(){
    return(
        <div>
            <input type="text" placeholder="Write Something" />
            <button onClick={formhandler}>submit</button>
        </div>
    )
}