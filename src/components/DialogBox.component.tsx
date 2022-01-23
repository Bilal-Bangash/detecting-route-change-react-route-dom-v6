import { Button, Modal } from 'react-bootstrap'

interface DialogBoxProps {
  showDialog: boolean
  cancelNavigation: any
  confirmNavigation: any
}

const DialogBox: React.FC<DialogBoxProps> = ({
  showDialog,
  cancelNavigation,
  confirmNavigation,
}) => {
  return (
    <Modal show={showDialog}>
      <Modal.Header>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>There are some changes?</b>
        <br /> Are you sure you want to navigate!!!!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={cancelNavigation}>
          No
        </Button>
        <Button variant="danger" onClick={confirmNavigation}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default DialogBox
