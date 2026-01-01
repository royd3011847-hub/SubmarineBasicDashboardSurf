FROM ubuntu:latest 

RUN apt update
RUN apt install -y python3 python3-pip python3-flask

WORKDIR /app

# Copy your renamed Flask file
COPY app1.py /app/app1.py

COPY templates /app/templates  
COPY --chown=user:group static /app/static

EXPOSE 5000

# Point Flask to the correct file
ENV FLASK_APP=app1.py

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]

# compile: 
    # docker build -t flask-app .

#to run site: docker run -p 5002:5000 flask-app
#http://localhost:5002



#ngrok: 
    #ngrok http 5002