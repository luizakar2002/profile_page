import React, { useState } from 'react';
import './UserHistory.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

interface MatchRowProps {
  player1: string;
  score1: string;
  player2: string;
  score2: string;
}

interface FriendRowProps {
  name: string;
  status: string;
}

const defaultAvatar = 'path_to_default_avatar_image.jpg'; // Replace with the actual path to your default avatar image

const ProfilePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('matches');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="profile-page">
      <div className="profile-avatar">
        <Avatar alt="Avatar" src={defaultAvatar} />
      </div>
      <div className="profile-name">Joe</div>

      <div className="menu">
        <div
          className={`menu-item ${activeSection === 'matches' ? 'active' : ''}`}
          onClick={() => handleSectionClick('matches')}
        >
          Matches
        </div>
        <div
          className={`menu-item ${activeSection === 'friends' ? 'active' : ''}`}
          onClick={() => handleSectionClick('friends')}
        >
          Friends
        </div>
      </div>

      <div className="section-container">
        {activeSection === 'matches' && (
          <div className="section matches-section">
            <h2>Matches</h2>
            <div className="matches-list">
              <MatchRow player1="Joe" score1="7" player2="Tom" score2="8" />
              <MatchRow player1="Joe" score1="6" player2="Anna" score2="2" />
              <MatchRow player1="Joe" score1="2" player2="Karen" score2="6" />
            </div>
          </div>
        )}

        {activeSection === 'friends' && (
          <div className="section friends-section">
            <h2>Friends</h2>
            <div className="friends-list">
              <FriendRow name="John" status="Online" />
              <FriendRow name="Jane" status="In Game" />
              <FriendRow name="Bob" status="Offline" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MatchRow: React.FC<MatchRowProps> = ({ player1, score1, player2, score2 }) => {
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

const FriendRow: React.FC<FriendRowProps> = ({ name, status }) => {
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
