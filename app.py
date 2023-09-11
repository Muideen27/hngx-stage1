from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)

@app.route('/api', methods=['GET'])

def get_info():
  slack_name = request.args.get('slack_name')
  track = request.args.get('track')

    # Get the current day of the week
  current_day = datetime.datetime.now().strftime('%A')

    # Get current UTC time with validation
  current_time = datetime.datetime.utcnow()

    # Construct the JSON response
  response = {
        "slack_name": "Muideen Ilori",
        "current_day": current_day,
        "utc_time": current_time.strftime('%Y-%m-%dT%H:%M:%SZ'),
        "track": "Backend",
        "github_file_url": "https://github.com/Muideen27/hngx-stage1.git/app.py",
        "github_repo_url": "https://github.com/Muideen27/hngx-stage1.git",
        "status_code": 200
    }

  return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)