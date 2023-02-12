import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavDropdown from 'react-bootstrap/NavDropdown';

function MedCard(props){
    return (
        <Card style={{ width: '26rem',height:'25rem' }}>
        <Card.Img style={{width: '96%',height:'15rem',padding:'1%'}} variant="top" src={props.url}/>
        <Card.Body>
          <Card.Title><h2>{props.title}</h2></Card.Title>
          <Card.Text>
          {props.desc}
          </Card.Text>
        
        </Card.Body>
      </Card>
    )
}

export default MedCard;