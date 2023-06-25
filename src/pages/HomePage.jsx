import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 4,
        mx: 'auto',
        mt: 5,
        px: 10,
        borderRadius: 5,
        width: 200,
        // height: 100,
        backgroundColor: '#c2e6f3',
        boxShadow: '3px 3px 2px 1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p>Welcome! Create your own phonebook!</p>
    </Box>
  );
};
export default HomePage;
