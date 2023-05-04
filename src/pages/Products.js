import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CustomCard from '../components/Card'
const Products = () => {
const {products}=useSelector(state=>state.products)

  return (
    <>
    
    <h1>products</h1>
    <Row className='g-5'>
{
  products.map((item)=>{
    return <Col key={item.id}>
    <CustomCard  {...item} />
    </Col>
  })
}
      
    </Row>
    </>
  )
}

export default Products