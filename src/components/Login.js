import { React } from "react";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
} from "reactstrap";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <Card>
      <CardHeader>
        <h2>Log In</h2>
      </CardHeader>
      <CardBody>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button color="warning" className="mt-2">
            <Link to="/home">Sign In</Link>
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default LogIn;
