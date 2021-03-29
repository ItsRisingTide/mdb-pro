import logo from "./logo.svg";
import "./App.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MDBContainer>
        <MDBRow>
          <MDBCol>fdf1</MDBCol>
          <MDBCol>fdf2</MDBCol>
          <MDBCol>fdf3</MDBCol>
          <MDBBtn>dfgdfg</MDBBtn>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;
