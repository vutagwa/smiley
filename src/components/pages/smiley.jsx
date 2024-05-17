import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

const Smiley = () => {
  const [userName, setUserName] = useState('');
  const [userPreferences, setUserPreferences] = useState('');

  const handleNameInput = (value) => {
    setUserName(value);
    return '3';
  };

  const handleMoodInput = (value) => {
    setUserPreferences(value);
    return '4';
  };

  const handleUserPreferences = (value) => {
    setUserPreferences(value);
    return 'conversation';
  };

  const steps = [
    {
      id: '1',
      message: 'Hey there! I am Smiley. What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: ({ value }) => handleNameInput(value),
    },
    {
      id: '3',
      message: `Hi ${userName}! How are you feeling today?`,
      trigger: 'mood',
    },
    {
      id: 'mood',
      user: true,
      trigger: ({ value }) => handleMoodInput(value),
    },
    {
      id: '4',
      message: `That sounds ${userPreferences}. Is there anything I can do to cheer you up?`,
      trigger: 'cheerUp',
    },
    {
      id: 'cheerUp',
      options: [
        { value: 'yes', label: 'Yes, please!', trigger: 'help' },
        { value: 'no', label: 'No, I\'m fine.', trigger: 'good' },
      ],
    },
    {
      id: 'help',
      message: 'Great! I\'m here for you. What would you like to talk about?',
      trigger: 'conversation',
    },
    {
      id: 'good',
      message: 'Alright! If you change your mind, I\'ll be here. Take care!',
      end: true,
    },
    {
      id: 'conversation',
      user: true,
      trigger: ({ value }) => handleUserPreferences(value),
    },
    {
      id: '5',
      message: 'I am glad to hear that. Feel free to share anything with me.',
      trigger: 'conversation',
    },
    {
      id: 'comfort1',
      message: 'Remember, it\'s okay not to be okay sometimes. I\'m here to listen.',
      trigger: 'conversation',
    },
    {
      id: 'comfort2',
      message: 'If there\'s anything on your mind, I am here to help you through it.',
      trigger: 'conversation',
    },
    {
      id: 'comfort3',
      message: 'Take a deep breath. You are doing great, and I am here for you.',
      trigger: 'conversation',
    },
  ];

  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
};

export default Smiley;
