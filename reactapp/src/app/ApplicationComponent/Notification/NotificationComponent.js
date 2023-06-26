import React, {useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../State/ProductState/ProductActions";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { AiFillBell } from "react-icons/ai";
import { useSelector } from 'react-redux';

let NotificationComponent = () => {
  //get items from each componenets carts
  let getProduct = useSelector((state)=>state.productReducer.products);
  let getCartItems = useSelector((state)=>state.cartReducer);
  let getRecentOrderCart = useSelector((state)=> state.recentOrderReducer.orderReceived)
  let getcancelOrder = useSelector((state)=> state.cancelOrderReducer);
  let getCheckOutItems = useSelector((state)=>state.cartReducer);
  
  //fetch all products
  let dispatchToFetch = useDispatch();
  useEffect(()=>{ dispatchToFetch(fetchProducts()) },[]) 

  let [decrementProdNotif, toggleProdDecrement] = useState(false)
  let [decrementCartNotif, toggleCartDecrement] = useState(false)
  let [decrementRectOrdtNotif, toggleRectOrdDecrement] = useState(false)
  let [decrementCancOrdtNotif, toggleCancOrdDecrement] = useState(false)
  let [decrementChkOutNotif, toggleChkOutDecrement] = useState(false)

  //add 1 to notification if each component have at least one item the cart
  let countNumberOfNotification = 0;
  if(getProduct.length > 0){
    countNumberOfNotification++
  }
  if(getCartItems.length > 0){
    countNumberOfNotification++
  }
  if(getRecentOrderCart.length > 0){
    countNumberOfNotification++
  }
  if(getcancelOrder.length > 0){
    countNumberOfNotification++
  }
  if(getCheckOutItems.length > 0){
    countNumberOfNotification++
  }

  //decrement notification by 1 
  if (decrementProdNotif){
    countNumberOfNotification--
  }
  if (decrementCartNotif){
    countNumberOfNotification--
  }
  if (decrementRectOrdtNotif){
    countNumberOfNotification--
  }
  if(decrementCancOrdtNotif){
    countNumberOfNotification--
  }
  if(decrementChkOutNotif){
    countNumberOfNotification--
  }
  
  //count number of items that is in the cart
  let countItemInCart = 0;
  for( let item of getCartItems ){
    countItemInCart++
  }

  let countItemInRecentOrder = 0;
  for(let item of getRecentOrderCart){
    countItemInRecentOrder++
  }

  let countItemInCancelOrder= 0;
  for(let item of getcancelOrder){
    countItemInCancelOrder++
  }

  let countItemInCheckOut= 0;
  for( let item of getCheckOutItems ){
    countItemInCheckOut++
  }

  let navigate = useNavigate();
 
  let goToProduct =() =>{
    navigate("/product")
  }

  let goToCart=()=>{
    navigate("/cart")
  }

  let goToRecentOrder=()=>{
    navigate("/recentorder")
   
  }

  let goToCancelOrder=()=>{
    navigate("/cancelorder")
  }

  let goToCheckOut=()=>{
    navigate("/checkout")
  }
 
  return (
    <>
    
    <Dropdown className="d-inline" drop='down-centered'>
        <Dropdown.Toggle variant="primary" id="dropdown-basic" >
        <AiFillBell size={20}/> <Badge bg="danger">{countNumberOfNotification}</Badge>
        </Dropdown.Toggle>
        
        {/* Product notification*/}
        <Dropdown.Menu >
          <Dropdown.ItemText >
            <Card >
              <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text>
                  Please Check out the products that are available.
                </Card.Text>
                <Button variant="primary" onClick={()=>{goToProduct(); toggleProdDecrement(!decrementProdNotif)}}>Product</Button>
              </Card.Body>
            </Card>
          </Dropdown.ItemText>

          {/* Cart notification*/}
          <Dropdown.ItemText>
            {getCartItems.length > 0 ?
              <Card >
              <Card.Body>
                <Card.Title>Cart</Card.Title>
                <Card.Subtitle className="mb-2">Items in Cart: <Badge bg="warning"><b>{countItemInCart}</b></Badge> </Card.Subtitle>
                <Card.Text>
                  Please check the cart you have some items that needs to be checked out.
                </Card.Text>
                <Button variant="primary" onClick={()=>{goToCart(); toggleCartDecrement(!decrementCartNotif)}}>Cart</Button>
              </Card.Body>
            </Card>

            :
             ""
            }
          </Dropdown.ItemText>
          
          {/* Recent Order notification */}
          <Dropdown.ItemText>
            {getRecentOrderCart.length > 0 ?
              <Card >
              <Card.Body>
                <Card.Title>Recent Order</Card.Title>
                <Card.Subtitle className="mb-2">Items in Recent Order: <Badge bg="warning"><b>{countItemInRecentOrder}</b></Badge> </Card.Subtitle>
                <Card.Text>
                  Check your recent order purchases.
                </Card.Text>
                <Button variant="primary" onClick={()=>{goToRecentOrder(); toggleRectOrdDecrement(!decrementRectOrdtNotif)} }>Recent Order</Button>
              </Card.Body>
            </Card>
            
            :
             ""
            }
          </Dropdown.ItemText>
           
           {/* Cancel Order notification */}
          <Dropdown.ItemText>
            {getcancelOrder.length > 0 ?
              <Card >
              <Card.Body>
                <Card.Title>Cancel Order</Card.Title>
                <Card.Subtitle className="mb-2">Items in Cancel Order: <Badge bg="warning"><b>{countItemInCancelOrder}</b></Badge> </Card.Subtitle>
                <Card.Text>
                  Check the cancelled orders.
                </Card.Text>
                <Button variant="primary" onClick={()=>{goToCancelOrder();toggleCancOrdDecrement(!decrementCancOrdtNotif)}}>Cancel Order</Button>
              </Card.Body>
            </Card>
            
            :
             ""
            }
          </Dropdown.ItemText>

          {/* Need to update checkout component because fetching items from cart. */}
          <Dropdown.ItemText>
            {getCheckOutItems.length > 0 ?
              <Card >
              <Card.Body>
                <Card.Title>CheckOut</Card.Title>
                <Card.Subtitle className="mb-2">Items in Cart: <Badge bg="warning"><b>{countItemInCheckOut}</b></Badge> </Card.Subtitle>
                <Card.Text>
                  Please go to CheckOut page to make you're payment
                </Card.Text>
                <Button variant="primary" onClick={()=>{goToCheckOut(); toggleChkOutDecrement(!decrementChkOutNotif)}}>Cart</Button>
              </Card.Body>
            </Card>

            :
             ""
            }
          </Dropdown.ItemText>

        </Dropdown.Menu>
     </Dropdown>

  
    
      
    </>
  )
}

export default NotificationComponent;