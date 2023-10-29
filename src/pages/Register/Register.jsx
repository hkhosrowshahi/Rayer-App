import React, { useState } from "react";
import { Row, Col, Form, Button, Image, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../services/userServices";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassw0rd] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      nationalCode: nationalCode,
      phoneNumber: phoneNumber,
      password: password,
    };
    if (password === reEnterPassword) {
      const response = async () => {
        const result = await registerService(userData);
        if (result.statusCode === "Success") {
          navigate("/otp", { state: { phoneNumber: phoneNumber } });
        } else {
          alert(result.message);
        }
      };
      response().catch(console.error);
    } else {
      alert("رمز عبور و تکرار آن با هم یکسان نیستند");
    }
  };

  return (
    <Container>
      {/* <Col md={6} className="left-column">
        <Image src={maincover} fluid />
      </Col> */}
      <Col style={{ bg: "#fff" }}>
        <Form onSubmit={submitHandler}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFisrtName">
              <Form.Label>نام</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                size="sm"
                type="text"
                xs={1}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>نام خانوادگی</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                size="sm"
                type="text"
                xs={3}
              />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>کد ملی</Form.Label>
            <Form.Control
              onChange={(e) => setNationalCode(e.target.value)}
              value={nationalCode}
              size="sm"
              type="text"
              xs={1}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>شماره موبایل</Form.Label>
            <Form.Control
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              size="sm"
              type="text"
              xs={3}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>رمز عبور</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              size="sm"
              type="password"
              xs={3}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>تکرار رمز عبور</Form.Label>
            <Form.Control
              onChange={(e) => setReEnterPassw0rd(e.target.value)}
              value={reEnterPassword}
              size="sm"
              type="password"
              xs={3}
            />
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Button
                  variant="outline-primary"
                  type="submit"
                >
                  ثبت
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  );
};
export default Register;
