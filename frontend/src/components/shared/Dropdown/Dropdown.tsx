import Dropdown from "react-bootstrap/Dropdown";

function DropDown({userName}: any) {
  return (
    <Dropdown style={{marginLeft:'20px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">Welcome {userName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
