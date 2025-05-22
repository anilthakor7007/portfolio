import { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.svg";
import { toast } from "react-hot-toast";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formDetails.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formDetails.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!formDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formDetails.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?\d{7,15}$/.test(formDetails.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formDetails.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
    setErrors({ ...errors, [category]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setButtonText("");
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
        setStatus({
          success: false,
          message:
            error.message || "Something went wrong, Please try again later",
        });
        toast.error("Something Went Wrong, Try again.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      } else {
        let result = await response.json();
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
        toast.success("Message sent successfully.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong, Please try again later",
      });
      toast.error("Something Went Wrong, Try again.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    } finally {
      setIsSubmitting(false);
      setButtonText("Send");
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
            <form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    className={errors.firstName ? "is-invalid" : ""}
                  />
                  {errors.firstName && (
                    <div className="text-danger small">{errors.firstName}</div>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    className={errors.lastName ? "is-invalid" : ""}
                  />
                  {errors.lastName && (
                    <div className="text-danger small">{errors.lastName}</div>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className={errors.email ? "is-invalid" : ""}
                  />
                  {errors.email && (
                    <div className="text-danger small">{errors.email}</div>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    className={errors.phone ? "is-invalid" : ""}
                  />
                  {errors.phone && (
                    <div className="text-danger small">{errors.phone}</div>
                  )}
                </Col>
                <Col>
                  <textarea
                    id="fixedTextarea"
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className={errors.message ? "is-invalid" : ""}
                  ></textarea>
                  {errors.message && (
                    <div className="text-danger small">{errors.message}</div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting ? "#000" : undefined,
                      color: isSubmitting ? "#fff" : undefined,
                      position: "relative",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          style={{ color: "#fff", marginRight: "8px" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>{buttonText}</span>
                    )}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
