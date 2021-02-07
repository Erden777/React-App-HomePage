import React from "react";
import { Card } from "react-bootstrap";


function Profilebar({ data, setData , userData }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{userData}</Card.Header>
            <Card.Body>
                <Card.Title>Age: 20</Card.Title>
                <Card.Text>
                    Fullname: Erden Aidynuly <br/>
                    City: Zaysan
                    Univercity: IITU
                </Card.Text>
              
            </Card.Body>
        </Card>
    );
}
export default Profilebar;