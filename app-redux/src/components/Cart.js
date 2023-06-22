// import { useSelector } from "react-redux";
// import CartCard from "./CartCard";


// const Cart = () => {
//   const cartItem = useSelector((store) => store.cart.items);
//   const{
//     card: {
//       card: {
//         itemCards: [{
//           card: {
//             info: {
//               name,
//               imageId,
//               description,
//               price
//             }
//           }
//         }]
//       }
//     }
//   } = cartItem;
//   // console.log(cartItems[1].card.card.itemCards[0].card.info);
//   // console.log(name);
//   // console.log(imageId);
//   // console.log(description);
//   // console.log(price);
//   return (
//     <>
//     <div className="text-2xl font-bold">
//       Cart - {cartItem.length}
//     </div>
//     {cartItem.map((item,index)=><CartCard key={index} {...cartItem}/>)}
//     </>
//   );
// };

// export default Cart;


//=====================================================
// import { useSelector } from "react-redux";
// import CartCard from "./CartCard";

// const Cart = () => {
//   const cartItem = useSelector((store) => store.cart.items);
//   const {
//     card: {
//       card: {
//         itemCards: [{
//           card: {
//             info: {
//               name,
//               imageId,
//               description,
//               price
//             }
//           }
//         }]
//       }
//     }
//   } = cartItem[0];

//   return (
//     <>
//       <div className="text-2xl font-bold">
//         Cart - {cartItem.length}
//       </div>
//       {cartItem.map((item, index) => (
//         <CartCard key={index} {...item} />
//       ))}
//     </>
//   );
// };

// export default Cart;


//================================================================
// import { useSelector } from "react-redux";
// import CartCard from "./CartCard";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
// console.log(cartItems);
//   if (cartItems.length === 0) {
//     // Handle the case when the cart is empty
//     return (
//       <div className="text-2xl font-bold">
//         Cart - 0
//       </div>
//     );
//   }

//   const {
//     card: {
//       card: {
//         itemCards: [{
//           card: {
//             info: {
//               name,
//               imageId,
//               description,
//               price
//             }
//           }
//         }]
//       }
//     }
//   } = cartItems[0];

//   return (
//     <>
//       <div className="text-2xl font-bold">
//         Cart - {cartItems.length}
//       </div>
//       {cartItems.map((item, index) => (
//         <CartCard key={index} {...item} />
//       ))}
//     </>
//   );
// };

// export default Cart;



//=========================================================

import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  if (cartItems.length === 0) {
    // Handle the case when the cart is empty
    return (
      <div className="text-2xl font-bold">
        Cart - 0
      </div>
    );
  }

  return (
    <>
      <div className="text-2xl font-bold">
        Cart - {cartItems.length}
      </div>
      {cartItems.map((item, index) => {
        const {
          card: {
            card: {
              itemCards: [{
                card: {
                  info: {
                    name,
                    imageId,
                    description,
                    price
                  }
                }
              }]
            }
          }
        } = item;

        return (
          <CartCard
            key={index}
            name={name}
            imageId={imageId}
            description={description}
            price={price}
          />
        );
      })}
    </>
  );
};

export default Cart;
