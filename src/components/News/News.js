import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavDropdown from 'react-bootstrap/NavDropdown';
import SmallCard from '../Card/SmallCard';
import BigCard from '../Card/BigCard';
import MedCard from '../Card/MedCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BasicExample() {
const [data,setData]=useState([])

const getDate=(dateString)=>{
    
var date = new Date(dateString.replace('IST', ''));

let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

return (year+"/"+month+"/"+day)
}

useEffect(()=>{

    axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-02-11&to=2023-02-11&sortBy=popularity&apiKey=4460f407686649a1826d1b9794899b74").then(
        res=>{
            if(res.data.articles){
                setData(res.data.articles)
            }
        }
    )
},[])

  return (
    <div>
     
        
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    {/* <img style={{borderRadius:30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVy0DJ7DPsd_W0NA-7-PnmkNG851p9xN2mg&usqp=CAU" width="30" height="30"  alt=""></img> */}
    <div style={{height:40,width:40,borderRadius:30,justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'orange'}}><span style={{color:'white'}}>D</span></div>
  </a>
</nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Learn</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#home">Bookmarks</Nav.Link>
            <Nav.Link href="#link">UI Links</Nav.Link>
            <Nav.Link href="#link">Lain NYA</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{paddingLeft:'14%',paddingRight:'15%'}}>
    <div style={{width:'100%',height:'0.3rem',backgroundColor:'black'}}>
    </div>
    <h1 style={{marginTop:'2%'}}>Featured Article</h1>
    </div>

    <div style={{paddingLeft:'10%',paddingRight:'10%'}}  >
    {/* <Row>
        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><h1>
            Featured Article</h1></Col>
        <Col></Col>
      </Row> */}
    <Row style={{padding:'2%'}}>
        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <BigCard
      url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9UOgc-Nx6vXBorsLhVi_KYtXtXPPxBfGHg&usqp=CAU"}
      title={"Card Title"}
      desc={"  Some quick example text to build on the card title and make up the bulk of the card's content."}
      />
        </Col>
        <Col style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
            
<SmallCard 
url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9UOgc-Nx6vXBorsLhVi_KYtXtXPPxBfGHg&usqp=CAU"}
title={"Card Title"}
desc={"  Some quick example text to build on the card title and make up the bulk of the card's content."}
/>
<SmallCard 
url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9UOgc-Nx6vXBorsLhVi_KYtXtXPPxBfGHg&usqp=CAU"}
title={"Card Title"}
desc={"  Some quick example text to build on the card title and make up the bulk of the card's content."}
/>
<SmallCard 
url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9UOgc-Nx6vXBorsLhVi_KYtXtXPPxBfGHg&usqp=CAU"}
title={"Card Title"}
desc={"  Some quick example text to build on the card title and make up the bulk of the card's content."}
/>

    
    </Col>
      </Row>
      <div style={{paddingLeft:'5%',paddingRight:'5%'}}>
    <div style={{width:'100%',height:'0.3rem',backgroundColor:'black'}}>
    </div>
    <h1 style={{marginTop:'2%'}}>Article Tarbaru</h1>
    </div>
      <div style={{padding:'5%'}}> 
      <Row>
       <MedCard
       url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9UOgc-Nx6vXBorsLhVi_KYtXtXPPxBfGHg&usqp=CAU"}
       title={"Card Title"}
       desc={"  Some quick example text to build on the card title and make up the bulk of the card's content."}
       />
  <MedCard
       url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9UOgc-Nx6vXBorsLhVi_KYtXtXPPxBfGHg&usqp=CAU"}
       title={"Card Title"}
       desc={"  Some quick example text to build on the card title and make up the bulk of the card's content."}
       />
       <MedCard
       url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9UOgc-Nx6vXBorsLhVi_KYtXtXPPxBfGHg&usqp=CAU"}
       title={"Card Title"}
       desc={"  Some quick example text to build on the card title and make up the bulk of the card's content."}
       />
      </Row>
      
      </div>

    </div>
    </div>
  );
}

export default BasicExample;