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
        height: 100,
        backgroundColor: 'blue',
        color: 'white',
      }}
    >
      <p>Welcome! Create your own phonebook!</p>
    </Box>
  );
};
export default HomePage;
