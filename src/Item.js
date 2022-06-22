import React from 'react';
import './index.scss';

// function Item(props) {
//     return (
//         <div className='card'>
//             <img width={140} height={120} src={props.img} alt="Item"/>
//             <p>{props.name}</p>
//             <div>
//                 <div className='cardInfo'>
//                     <span>Price: <b>{props.price} грн.</b>
//                     </span>
//
//                     <button>В корзину</button>
//                 </div>
//             </div>
//         </div>
//     );
// }


let Item = (props) => {
    return <div className='d-flex'>
        {

            props.posts.map( u =>
                <div key={u.id}>
                    <div className='card'>
                        <img width={140} height={120} src={u.image} alt="Item"/>
                        <p>{u.name}</p>
                        <div>
                            <div className='cardInfo'>
                    <span>Price: <b>{u.price}</b>
                    </span>

                                <button>В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>)
        }
    </div>
}
export default Item;