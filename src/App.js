import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Menubar from './components/Menubar';
import ItemTable from './components/ItemTable';
import OccuranceTable from './components/OccuranceTable';
function App() {
  return (
    <Container fluid="lg">
      <Menubar/>
      <Row>
        <Col>
          <h1>Welcome to DND shop inventory</h1>
          <p>lorem</p>
        </Col>
      </Row>
      <Row>
        <Col>
         <h2>A</h2>
        </Col>
        <Col>
        <h2>A</h2>
        </Col>
        <Col>
        <h2>A</h2>
        </Col>
      </Row>
      <Row>
        <ItemTable/>
        {/* <Col sm={12} md={8}><ItemTable/></Col>
        <Col sm={12} md={4}>
          <h3>Description</h3>
          <p>lorem ipsum</p>
        </Col> */}
      </Row>
      <Row><OccuranceTable/></Row>
      
      
      
     
    </Container>
  );
}

export default App;
