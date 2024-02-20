
import { Button, Dropdown } from '@rewind-ui/core';
import { useRouter } from 'next/navigation';
function DropDown({userName}: any) {
  const router = useRouter()
  return (
    <Dropdown className='ml-2' color="slate" itemColor="dark">
      <Dropdown.Trigger>
        <Button>Welcome {userName}!</Button>
      </Dropdown.Trigger>
      <Dropdown.Content className='w-[10rem]'>
        <Dropdown.Item onClick={()=>router.push('/profile')}>My Profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Messages</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}

export default DropDown;
