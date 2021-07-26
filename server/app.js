const express = require("express");
const path = require("path");
const logger = require("morgan");
const db = require("./routes/data.js");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(logger("dev"));

app.get("/", (req, res) => {
  const years = db.getData();
  const html = `
    <html>
        <head>
            <title>Dealer's Choice</title>
            <link rel='stylesheet' href='styles.css'>
        </head>
        <body>
            <div id='header'>
                <h1>Dealer's Choice! Choose an item to find out more</h1>
            </div>
            <div id='items'>
                
                    ${years
                      .map(
                        (year) =>
                          `<span>
                          <a href='./year/${year["Year"]}'>
                            ${year["Year"]}
                        </a>
                        </span>`
                      )
                      .join("")}
            </div>
        </body>
    </html>
    `;
  res.send(html);
});

app.get("/year/:yr", (req, res) => {
  const yr = req.params.yr;
  const year = db.find(yr);
  const html = `
      <html>
          <head>
              <title>Dealer's Choice</title>
              <link rel='stylesheet' href='styles.css'>
          </head>
          <body>
            <p>
            NYC Population: ${year["New York City Population"].toLocaleString(
              "en-US"
            )}
            </p>
            <p>
            NYC Consumption: ${year[
              "NYC Consumption(Million gallons per day)"
            ].toLocaleString("en-US")} million gallons per day
            </p>
          </body>
      </html>
      `;
  res.send(html);
});

const port = 3000;

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
