import React from 'react';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';

const Header = () => {
    return (
        <React.Fragment>
            <Navbar dark>
                <Container>
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </Container>
            </Navbar>

            {}
            <div className="jumbotron bg-primary text-white py-5">
                <Container>
                    <Row className="row-header">
                        <Col xs={12} sm={6}>
                            <h1>Ristorante Con Fusion</h1>
                            <p>
                                We take inspiration from the world's best cuisines
                                and create a unique fusion experience. Our lip-smacking
                                creations will tickle your culinary senses!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Header;
