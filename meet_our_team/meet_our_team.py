from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def meet_our_team():
    return send_file('meet_our_team.html')

if __name__ == '__main__':
    app.run(debug=True)
