import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. By Julius Muhumuza.
                Hello World!
            </header>
            <h2>Second header for Task 3!</h2>
            <img
                src={"/Users/jjmuhumuza/tasks/src/picture for task3.jpeg"}
                alt="A picture of the moon!"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>
                    {" "}
                    <p> First Element of list</p>
                </li>
                <li>
                    {" "}
                    <p> Second Element of list</p>
                </li>
                <li>
                    {" "}
                    <p> Third Element of list</p>
                </li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <div>
                            This is{" "}
                            <span style={{ color: "red" }}>colored text</span>.
                        </div>
                    </Col>
                    <Col>
                        {" "}
                        <div>
                            style =width: 20px; length: 10px; backgroundColor:
                            #e61e3f;
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
