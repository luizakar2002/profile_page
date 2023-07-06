import React from 'react';
import { Button, Container } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const moveUpDownAnimation = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: 200px;
  }
  100% {
    top: 0;
  }
`;

const jumpAnimation = keyframes`
  0%, 20%, 60%, 100% {
    transform: translateX(-50%);
  }
  40% {
    transform: translateX(50%) translateY(-50%);
  }
  80% {
    transform: translateX(50%) translateY(50%);
  }
`;

const MovingRectangle = styled('div')(({ theme }) => ({
  width: '40px',
  height: '200px',
  backgroundColor: 'purple',
  position: 'relative',
  animation: `${moveUpDownAnimation} 2s infinite`,
  top: '0',
}));

const JumpingBall = styled('div')(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'black',
  position: 'relative',
  animation: `${jumpAnimation} 1s infinite`,
  marginTop: '10rem',
  top: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontStyle: 'italic',
  fontWeight: 'bold',
}));

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', paddingTop: '10vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MovingRectangle />
        <JumpingBall>
          <span style={{ fontSize: '30px' }}>42</span>
        </JumpingBall>
        <MovingRectangle />
      </div>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: '20rem',
          backgroundColor: 'black',
          fontSize: '2.3rem',
          borderRadius: '50px',
          width: '100%',
        }}
      >
        Sign in
      </Button>
    </Container>
  );
};

export default Home;
