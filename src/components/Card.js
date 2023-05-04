import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,removeFromCart, decreaseQuantity, increaseQuantity } from "../store/cardSlice";


function CustomCard({quantity, id, title, description, image, price }) {
  // const { quantity } = useSelector((state) => state.products);




  const dispatch = useDispatch();
  const handleAdd=()=>{
    dispatch(addToCart(id))
  }
  const removeHandler=()=>{
    dispatch(removeFromCart(id))
  }

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));

  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <Card className="h-100" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-3">{title}</span>
          <span className="text-muted me-2">{price}</span>
        </Card.Title>
        <div className="mt-auto">
      
          {quantity < 1 ? (
            <div className="detail">
              <Button onClick={handleAdd} className="w-100">
                Add To Cart
              </Button>
            </div>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={handleDecrease}>-</Button>
                <span className="fs-4">{quantity} in cart </span>
                <Button onClick={handleIncrease}>+</Button>
              </div>
              <Button onClick={removeHandler}  variant="danger">Delete From Cart</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
