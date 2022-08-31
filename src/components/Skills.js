import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Tecnologias
                            </h2>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. <br></br> Maecenas ut mollis arcu. Vestibulum efficitur vestibulum risus id facilisis.<br></br> Sed pulvinar turpis leo, vel pulvinar mauris scelerisque eu. Mauris id pretium libero. <br></br>Donec condimentum odio dui, id euismod risus venenatis eget. <br></br>Suspendisse potenti. Integer a nulla sit amet libero sollicitudin tincidunt.<br></br>Nulla ex ipsum, volutpat eu felis a, ultrices placerat tellus.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} alt="Image"/>
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image"/>
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="Image"/>
                                    <h5>Typescript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>

        </section>
    )
        
}