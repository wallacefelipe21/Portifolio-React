import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web", "Designer", "UI/UX "]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 10)
    const period = 2000


    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }

        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                                <span className="tagline"> Bem-vindo ao meu Portfólio</span>
                                <h1> {'Olá, eu sou'} <span className="wrap">{text}</span></h1>
                                <p> Técnico em Desenvolvimento de Sistemas pela ETEC e atualmente cursando tecnólogo em Desenvolvimento de Software Multiplataforma na FATEC, pude conhecer as principais ferramentas para o desenvolvimento web (HMTL, CSS, React/React Native), além de outras como Python, C# e MySql, também pude participar de diversos atividades onde desenvolvi meus conhecimentos sobre metodologias ágeis e gestão de grupo , durante este período me  encontrei principalmente na área de Front-end. Atualmente busco aprimorar esses conhecimentos e ganhar experiência dentro do mercado de trabalho. </p>
                                <button onClick={() => console.log('connect')}>Let's Gooooo <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section >
    )
}