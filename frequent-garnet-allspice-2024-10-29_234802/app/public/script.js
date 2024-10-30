async function sendMessage() {
    const botToken = document.getElementById('botToken').value;
    const channelId = document.getElementById('channelId').value;
    const message = document.getElementById('message').value;

    const url = '/send-message';
    const data = {
        botToken,
        channelId,
        message
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Message sent successfully!');
    } else {
        alert('Failed to send message.');
    }
}
