import React, {useState} from "react";
import { Carousel , Form , Button , Card } from "react-bootstrap";
import { Data , products , users } from "../Data";
import LoginForm from "../Authorization/LoginForm";
import Profilebar from "../Profile/Profilebar";

function Home(props){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    function addCard(name){
        alert("You added "+name+" to basket");
    }

    return (
        
        <div className="container my-5 ">
            <div className="row">
                <div className="col-4 my-3">
                    {
                        props.isAuth === true ?
                            <Profilebar setData={setData} data={data} userData={props.userdata} /> :
                            <LoginForm
                                name={props.name}
                                setUserdata= {props.setUserdata}
                                password={props.password}
                                setName={props.setName}
                                setPassword={props.setPassword}
                                setIsAuth={props.setIsAuth}
                                isAuth = {props.isAuth}
                                />
                        }
                </div>
                <div className="col-8 my-3">
                <div className="row">
                    {products.map((product) =>
                            <div className="col-4">
                                <Form >
                                    <Card className="mb-3" style={{ width: '14rem' , height: '18rem' }}>
                                        <Card.Img variant="top" src={product.uri} style={{height:'150px' }} />
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Button onClick={() => addCard(product.name)}  variant="primary">Add to card</Button>
                                        </Card.Body>
                                    </Card>
                                </Form>
                            </div>   
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;