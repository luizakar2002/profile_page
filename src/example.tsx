import React, { useState } from 'react';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const defaultAvatar = 'path_to_default_avatar_image.jpg'; // Replace with the actual path to your default avatar image

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('matches');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Avatar alt="Avatar" src={defaultAvatar} sx={{ width: 150, height: 150 }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" fontWeight="bold" mt={2}>
            Joe
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" mt={4}>
        <Button
          variant={activeSection === 'matches' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleSectionClick('matches')}
          startIcon={<MenuIcon />}
          sx={{ mr: 2 }}
        >
          Matches
        </Button>
        <Button
          variant={activeSection === 'friends' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleSectionClick('friends')}
        >
          Friends
        </Button>
      </Grid>

      <Grid container justifyContent="center" mt={4}>
        {activeSection === 'matches' && (
          <Grid item xs={12} sm={8}>
            <div className="section matches-section">
              <Typography variant="h4">Matches</Typography>
              <div className="matches-list">
                <MatchRow player1="Joe" score1="7" player2="Tom" score2="8" />
                <MatchRow player1="Joe" score1="6" player2="Anna" score2="2" />
                <MatchRow player1="Joe" score1="2" player2="Karen" score2="6" />
              </div>
            </div>
          </Grid>
        )}

        {activeSection === 'friends' && (
          <Grid item xs={12} sm={8}>
            <div className="section friends-section">
              <Typography variant="h4">Friends</Typography>
              <div className="friends-list">
                <FriendRow name="John" status="Online" />
                <FriendRow name="Jane" status="In Game" />
                <FriendRow name="Bob" status="Offline" />
              </div>
            </div>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

const MatchRow = ({ player1, score1, player2, score2 }) => {
  return (
    <div className="match-row">
      <div className="score">{score1}</div>
      <div className="player-name">{player1}</div>
      <div className="VS">VS</div>
      <div className="player-name">{player2}</div>
      <div className="score">{score2}</div>
    </div>
  );
};

const FriendRow = ({ name, status }) => {
  let statusColor = '';
  if (status === 'Online' || status === 'In Game') {
    statusColor = 'green';
  } else if (status === 'Offline') {
    statusColor = 'red';
  }

  return (
    <div className="friend-row">
      <div className="friend-name">{name}</div>
      <div className="friend-status">
        <div className={`status-circle ${statusColor}`}></div>
        <div className={status.toLowerCase()}>{status}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
