from flask import Flask, render_template
from os import environ

app = Flask(__name__, static_url_path="/static")


@app.route("/")
def index_view(*args, **kwargs):
    return render_template("index.html")


if __name__ == "__main__":
    app.run(
        debug=environ.get("DEBUG", "") == "True",
        host=environ.get("HOST", "0.0.0.0"),
        port=environ.get("PORT", 5000),
    )