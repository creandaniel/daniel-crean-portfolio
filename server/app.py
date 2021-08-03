import time
import json
import requests
from flask_cors import CORS
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
CORS(app)


#https://stackoverflow.com/questions/48777708/react-frontend-connecting-to-flask-backend-howto 
@app.route('/')
@app.route('/about')
@app.route('/skills')
@app.route('/portfolio')
@app.route('/contact')
@app.route('/time')
def get_current_time():
    return {'time': time.time()}


def get_json_data(arg):
    f = open('website.json')
    data = json.load(f)
    get_data = data[arg]
    return get_data

@app.route('/api/<summary>')
def contactData(summary=None):
    if summary == "contact":
        get_data = get_json_data(4)
    elif summary == "github":
        pass
    elif summary == "skills":
        get_data = get_json_data(2)
    elif summary == "projects":
        get_data = get_json_data(3)
    elif summary == "about":
        get_data = get_json_data(1)
    else:
        get_data = get_json_data(0)
    return jsonify(get_data)

@app.route('/api/github')
def GithubPortfolioData():
    try:
        response = requests.get("https://api.github.com/users/creandaniel/repos",
        headers={'Accept': 'application/vnd.github.v3.text-match+json'})
        get_data = response.json()
        projects = []
        for i in get_data:
            project = {
                "id": i["id"],
                "url": i["url"],
                "name": i["name"],
                "description": i["description"],
                "language":  i["language"],
                "manualimage": "https://raw.githubusercontent.com/creandaniel/" + i["name"] +"/master/resized.JPG"
            } 
            projects.append(project)
        return jsonify(projects)
    except Exception as e:
        return {"error": True, "message": str(e)}, 500
    

@app.route('/api/contact', methods=['post', 'get'])
def contactForm():
    if request.method == 'GET':
        fullname = request.args.get('fullname', None)
        if fullname:
            return fullname
        return "No fullname returieved"


#https://api.github.com/r…rest-quote-api/languages
