from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Flask is live 🚀</h1>"

@app.route("/typing-game")
def typing_game():
    return render_template("typing_game.html")

if __name__ == "__main__":
    app.run(debug=True)
