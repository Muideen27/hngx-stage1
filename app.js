const express = require('express');
const app = express();
const port = 3000; // Choose a suitable port

app.get('/api', (req, res) => {
  // Retrieve query parameters
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  const githubFileUrl = req.query.github_file_url;
  const githubRepoUrl = req.query.github_repo_url;

  // Get the current day of the week
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Get the current UTC time with a +/- 2 minute window
  const currentDateTime = new Date();
  // currentDateTime.setMinutes(currentDateTime.getMinutes() - 2);
  // const utcTime = currentDateTime.toISOString().replace('T', ' Time:').replace(/\.\d{3}Z$/, '');
  // const utcTime = currentDateTime.setMinutes(currentDateTime.getMinutes() - 2)
  // const utcTimenew = currentDateTime.toISOString().split('.')[0] + 'Z';
  const utcTime = currentDateTime.toISOString();


  // Prepare the JSON response
  const responseData = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: 'https://github.com/Muideen27/hngx-stage1.git/app.js',
    github_repo_url: 'https://github.com/Muideen27/hngx-stage1.git',
    status_code: 200,
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});