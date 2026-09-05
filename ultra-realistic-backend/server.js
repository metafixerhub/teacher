const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for visits
let visits = 0;

app.post('/api/visit', (req, res) => {
    visits++;
    console.log(`[Backend] Visit registered! Total visits: ${visits}`);
    res.json({ success: true, visits: visits, message: "Visit successfully stored in Express backend." });
});

app.get('/api/status', (req, res) => {
    res.json({ status: "Ultra-realistic backend is running", totalVisits: visits });
});

app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
});
