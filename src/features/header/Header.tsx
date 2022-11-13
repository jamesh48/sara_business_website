import { Tab, Tabs } from '@mui/material';

const Header = () => {
  const handleChange = () => {};
  return (
    <Tabs
      onChange={handleChange}
      sx={{
        border: '1px solid black',
        position: 'sticky',
        top: 0,
        backgroundColor: 'grey',
      }}
    >
      <Tab label="Home" sx={{ color: 'white' }} />
    </Tabs>
  );
};
export default Header;
