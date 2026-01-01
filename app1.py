from flask import Flask, render_template, url_for

app = Flask(__name__) #create Flask app instance

@app.route('/')
def index():
    return render_template('index1.html')


if __name__ == "__main__":
    #host = '0.0.0.0' makes the server publicly available 
    app.run(host='0.0.0.0', port=5000) 

# compile: 
    # docker build -t flask-app .

#to run site: docker run -p 5001:5000 flask-app

#shortcut:
'''
docker build -t flask-app .
docker run -p 5002:5000 flask-app
'''
#http://localhost:5002

#ngrok: 
    #ngrok http 5002