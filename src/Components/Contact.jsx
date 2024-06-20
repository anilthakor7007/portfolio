import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");

        try {
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDetails),
            });

            if (!response.ok) {
                const error = await response.json();
                console.error("Error:", error);
                setStatus({ success: false, message: error.message || 'Something went wrong, Please try again later' });
            } else {
                let result = await response.json();
                setButtonText("Send");
                setFormDetails(formInitialDetails);
                setStatus({ success: true, message: 'Message sent successfully' });
            }
        } catch (error) {
            console.error("Error:", error);
            setButtonText("Send");
            setStatus({ success: false, message: 'Something went wrong, Please try again later' });
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit} >
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email"
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone"
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        id="fixedTextarea"
                                        rows={6}
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    ></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                    {status.message && (
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    )}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
