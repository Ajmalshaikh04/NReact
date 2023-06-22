import { IMG_CDN_URL } from "../../config"

const CartCard = ({
    name,
    description,
    imageId,
    price,

}) => {
//     console.log(cartItems[1].card.card.itemCards[0].card.info);
//   console.log(cartItems[1].card.card.itemCards[0].card.info.name);
//   console.log(cartItems[1].card.card.itemCards[0].card.info.imageId);
//   console.log(cartItems[1].card.card.itemCards[0].card.info.description);
//   console.log(cartItems[1].card.card.itemCards[0].card.info.price);
    return (
        <div className="card">
            <img src={IMG_CDN_URL + imageId} alt="" className="card-img" />
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h4>Rupees: {price/100}</h4>
        </div>
    )
}

export default CartCard