import React, { useState } from "react";
import styles from "./Login.module.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { default as eyeOpen } from "../../icons/eyeOpen.svg";

export default function Login() {
  const [open, setOpen] = useState(true);
  const _handleClose = () => setOpen(false);
  const _handleShow = () => setOpen(true);
  return (
    <React.Fragment>
      <Modal
        show={open}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={styles.signIn}>Sign in</div>
          <Form className={styles.form}>
            <Form.Group
              style={{
                paddingRight: "10%",
                paddingLeft: "10%",
              }}
              className="mb-4"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" autoFocus className={styles.inputs} />
            </Form.Group>
            <Form.Group
              className="mb-4"
              style={{
                paddingRight: "10%",
                paddingLeft: "10%",
              }}
              controlId="formBasicPassword"
            >
              <Form.Label style={{ textAlign: 'left' }}>
                <span>Password</span>
              <a
                className={styles.forgotPassword}
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                Forgot password
              </a>

              </Form.Label>
              <Form.Control type="password" className={styles.inputs} />
              {/* <a href="javascript:;" style={{ top: "0px" }}>
                <img src={eyeOpen} alt="Show password"/>
              </a> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Row>
          <Col>
            <Button
              type="submit"
              style={{ width: "30%" }}
              className={styles.button}
            >
              Login
            </Button>
          </Col>
        </Row>
        <a
          className={styles.withoutAccount}
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          I dont't have an account
        </a>
      </Modal>
    </React.Fragment>
  );
}
