import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function NavBar() {
  const { quantitys } = useSelector((state) => state.products);

 
const navigate=useNavigate()
  return (
    <>
      
      <Navbar sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as ={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/products'>Products</Nav.Link>
            <Nav.Link as={NavLink} to='/cart' >Cart</Nav.Link>
          </Nav>
      <Button onClick={()=>navigate('/cart')}  variant='outline-primary ' style={{width:'3rem',height:'3rem',position:'relative'}} ><ShoppingCartIcon color='action' />
      <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{
        position:'absolute',
        color:'white',width:'1.5rem',height:'1.5rem',bottom:'0.5',right:'0',transform:'tarnslate(25% 25%)'
      }}>
        {quantitys}
      </div>
      </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;