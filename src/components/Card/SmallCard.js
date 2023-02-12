import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavDropdown from 'react-bootstrap/NavDropdown';

function SmallCard(props){
    return (
        <Card style={{ width: '89%',display:'flex',flexDirection:'row' }}>
        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}} sm={4}>
        <Card.Img variant="top" src={props.url} />
         </Col>
  
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
   {props.desc}
    </Card.Text>
  
  </Card.Body>
       </Card>
    )
}

export default SmallCard;