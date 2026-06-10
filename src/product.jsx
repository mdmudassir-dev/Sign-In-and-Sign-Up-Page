import './product.css'

import Price from './price'

export default function Product({titel,ind,image}){
    let oldprice=[5599,2469,7899,599];
    let newprice=[5099,2099,7599,499];
    let description=[["8000 DPI",
        "intuitev tuch surface"],
       [ "Desing for ipad pro",
        "intuitev tuch surface"],
       [ "optical oriantation",
        "Desing for ipad pro"],
        ["Desing for ipad pro",
        "optical oriantation"]];
    return(
        <div className='produc'>
            <h3>{titel}</h3>
            <img src={image} alt="mouses" className='image' />
            <p>{description[ind][0]}</p>
            <p>{description[ind][1]}</p>
            <Price oldprice={oldprice[ind]} newprice={newprice[ind]}/>
        </div>
    );
}