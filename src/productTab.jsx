import './product.css'
import Product from './product'

export default function Productab(){
    let style={
        display : "flex",
        flexWrap : "wrap"
    }
    return(
        <div className='big' style={style}>
            <Product titel="Logitech MX Master 3s" image="https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-mac-bluetooth-mouse/gallery/space-grey/mx-master-3s-for-mac-mouse-top-view-space-grey.png" ind="0"/>
            <Product titel="Apple Pencil (2nd Gen)" image="https://atlas-content-cdn.pixelsquid.com/assets_v2/272/2725200920735389183/previews/G03-200x200.jpg" ind="1"/>
            <Product titel="Zebronics Zeb-Transformer" image="https://zebronics.com/cdn/shop/products/Zeb-Transformer-pic1.jpg?v=1624537676&width=2048" ind="2"/>
            
            <Product titel="Portronics Toad 23 Wireless Mouse" image="https://www.portronics.com/cdn/shop/products/1200x1200-1_dfe0f55c-ac2d-4088-a530-2f01f10ba622_1440x.jpg?v=1680776101" ind="3"/><br />
            
        
        </div>
    );
}