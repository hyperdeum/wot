const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-message', async (req, res) => {
  const { botToken, channelId, message } = req.body;

  const url = `https://discord.com/api/v9/channels/${channelId}/messages`;
  const data = {
    content: message
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bot ${botToken}`,
        'Content-Type': 'application/json'
      }
    });
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Error sending message');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
