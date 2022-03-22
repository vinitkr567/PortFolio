import { React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import life from '../media/life.png'
import exp from '../media/exp.png'
import exped from '../media/exped.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'

const Experience = ({darkMode}) => {

    //const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
            <Container>
                <br></br>
                <h2 className="lead" align="center"><b>- Projects -</b></h2>
                <br></br>
                <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={exp}/>
                                        <Card.Body>
                                            <Card.Title align="center">NINE_WEST CLONE</Card.Title>
                                            <Card.Text>
                                                <p align="center">We have tried to make a look alike clone of Ninewest E-commerce Website.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>we were implemented to clone the front end, integrated it with backend and added similar looks and features
                                        <br></br>Technologies used- JavaScript, HTML5, MongoDB, CSS, ExpressJs, env.
                                        <br></br>Created APIs to integrate frontend and backend together
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://rishabhtg209.github.io/NINE_WEST/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/vinitkr567/NINE_WEST" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={life}/>
                                        <Card.Body>
                                            <Card.Title align="center">lifeStyleStores</Card.Title>
                                            <Card.Text>
                                                <p align="center">A website for fashion related products for men, women and children.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Planned the UI for website and designed frontend using HtML, CSS, Javascript
                                        <br></br>Built Database models using Local Storage
                                        <br></br>Sort items by there category Add items into the cart update items price according to their quantity and promo coupon in the cart
                                        <br></br>A Group Project done by 4 team members
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://lifestyleclone.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/cSahu14/lifeStyleProject" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={exped}/>
                                        <Card.Body>
                                            <Card.Title align="center">Expedia-Clone</Card.Title>
                                            <Card.Text>
                                                <p align="center">I have tried to clone the Expedia website as same as I can with the help of HTML5, CSS JAVASCRIPT.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>Properties</h4>
                                        <p>I have to work alone on this. Finding the solution at short time. The time limit for this project to complete in a week.
                                        <br></br>A web application that provides full-service ranging from hotels, flights to rental cars and vacation rentals.
                                        <br></br>User validation, checkout, and alerts.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://expediabyvinit.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/vinitkr567/Expedia-Clone" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                </Row>
                </Zoom>
                <br></br>
                <>
                {/* <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={rfp}/>
                                        <Card.Body>
                                            <Card.Title align="center">Rooted - Portal for farmers</Card.Title>
                                            <Card.Text>
                                                <p align="center">Developed a Portal for Farmers to sell their goods at a better rate.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>User-friendly and clean basic scripted website
                                        <br></br>Tech Stack - HTML, CSS, JavaScript
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://rooted-portal.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/SheHacks-Hack-O-holics/SheHacks" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={dsc}/>
                                        <Card.Body>
                                            <Card.Title align="center">Google Developer Student Clubs</Card.Title>
                                            <Card.Text>
                                                <p align="center">Worked as a core team member of GDSC UMIT</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Organized Study Jams, Hackathons and Webinars.
                                        <br></br>Hosted events of Google Cloud and Machine Learning.
                                        <br></br>Guided students in Google Cloud and Android Development Study Jams
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                        <a href="https://dscumit.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Website</Button>
                        </a>
                        <a href="https://www.instagram.com/dsc__umit/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Instagram Handle</Button>
                        </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={scr}/>
                                        <Card.Body>
                                            <Card.Title align="center">Student Council</Card.Title>
                                            <Card.Text>
                                                <p align="center">Representative of Department of Computer Science and Technology, UMIT</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Managed and helped students in their curriculum and other difficulties.
                                        <br></br>Co-organized annual fest 'Arcane Illusions'.
                                        <br></br>Coordinated between faculties and students about studies and other activities.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://www.instagram.com/umit_sc/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Instagram Handle</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                </Row>
                </Zoom> */}
                </>
            </Container>
            </Fade>
            <br></br>
            <br></br>
        </div>
    )
}

export default Experience
