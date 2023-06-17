import React, { useState } from 'react';
import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@material-ui/core';
import {
  SportsTennis as SportsTennisIcon,
  People as PeopleIcon,
  PersonAdd as PersonAddIcon,
  Block as BlockIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    background: '#f5f2ff',
    borderRadius: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  profile_avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    background: '#ffffff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    borderRadius: theme.spacing(2),
  },
  horizontalMenu: {
    display: 'flex',
    padding: theme.spacing(0),
    width: '100%',
    margin: theme.spacing(4, 0),
    justifyContent: 'space-between',
    background: '#f5f2ff',
    borderRadius: theme.spacing(2),
  },
  userName: {
    marginLeft: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1),
  },
  addButton: {
    marginRight: theme.spacing(1),
  },
  blockButton: {
    color: '#ffffff',
    background: '#ff0000',
  },
}));

const UserProfileAvatar = () => {
    const classes = useStyles();
    return (
      <Grid container alignItems="center" spacing={2}>
        <Grid item container xs={12} sm={4} md={3} alignItems="center">
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar.jpg"
            className={classes.profile_avatar}
          />
        </Grid>
        <Grid item container xs={12} sm={8} md={9} direction="column">
          <Typography variant="h5" align="left" className={classes.userName}>
            User Name
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" startIcon={<PersonAddIcon />} className={classes.addButton}>
              Add Friend
            </Button>
            <Button variant="contained" color="secondary" startIcon={<BlockIcon />} className={classes.blockButton}>
              Block
            </Button>
          </div>
        </Grid>
      </Grid>
    );
};  

const HorizontalMenu = ({ activeSection, handleMenuClick }) => {
  const classes = useStyles();

  const menuItems = [
    { section: 'matches', label: 'Matches', icon: <SportsTennisIcon /> },
    { section: 'friends', label: 'Friends', icon: <PeopleIcon /> },
  ];

  return (
    <List component="nav" className={classes.horizontalMenu}>
      {menuItems.map((item) => (
        <ListItem
          key={item.section}
          button
          onClick={() => handleMenuClick(item.section)}
          selected={activeSection === item.section}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
};

const MatchesSection = ({ matchData, handleMatchClick }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8}>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Player 1</TableCell>
                  <TableCell>Score 1</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Player 2</TableCell>
                  <TableCell>Score 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow onClick={handleMatchClick}>
                  <TableCell>{matchData.player1}</TableCell>
                  <TableCell>{matchData.score1}</TableCell>
                  <TableCell>vs</TableCell>
                  <TableCell>{matchData.player2}</TableCell>
                  <TableCell>{matchData.score2}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

const FriendsSection = ({ friendsData }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8}>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {friendsData.map((friend, index) => (
                  <TableRow key={index}>
                    <TableCell>{friend.name}</TableCell>
                    <TableCell>
                      <Avatar alt={friend.name} src={friend.avatar} className={classes.avatar} />
                    </TableCell>
                    <TableCell>{friend.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

const PublicProfile = () => {
  const classes = useStyles();
  const [activeSection, setActiveSection] = useState('matches');
  const [matchData, setMatchData] = useState({ player1: 'Joe', score1: 5, player2: 'Tom', score2: 7 });
  const [friendsData, setFriendsData] = useState([
    { name: 'Friend 1', avatar: '/path/to/avatar1.jpg', status: 'Online' },
    { name: 'Friend 2', avatar: '/path/to/avatar2.jpg', status: 'Offline' },
    { name: 'Friend 3', avatar: '/path/to/avatar3.jpg', status: 'In Game' },
  ]);

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  const handleMatchClick = () => {
    console.log('Match clicked');
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UserProfileAvatar />
        </Grid>
      </Grid>

      <div className={classes.horizontalMenu}>
        <HorizontalMenu activeSection={activeSection} handleMenuClick={handleMenuClick} />
      </div>

      {activeSection === 'matches' && <MatchesSection matchData={matchData} handleMatchClick={handleMatchClick} />}
      {activeSection === 'friends' && <FriendsSection friendsData={friendsData} />}
    </Container>
  );
};

export default PublicProfile;
