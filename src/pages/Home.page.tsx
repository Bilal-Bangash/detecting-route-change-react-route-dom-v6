import { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { DialogBox } from '../components'
import { useCallbackPrompt } from '../hooks/useCallbackPrompt'

const Home = () => {
  const [state, setState] = useState({})
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(showDialog)

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
    setShowDialog(true)
  }
  return (
    <Container>
      <DialogBox
        // @ts-ignore
        showDialog={showPrompt}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      />
      <Row className="pt-2 mt-5">
        <Col lg={4}></Col>
        <Col lg={4} md={6} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Designation"
                name="designation"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  )
}

export default Home
