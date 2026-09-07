const express = require("express");
const os = require("os");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>AWS DevOps Lab</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 100px;
                }
                h1 {
                    font-size: 40px;
                }
                .box {
                    padding: 30px;
                    border: 2px solid #333;
                    display: inline-block;
                }
            </style>
        </head>

        <body>
            <div class="box">
                <h1>Hello AWS Day 19 - Automatic CI/CD Test 🚀</h1>
                <h2>Node.js App is Running!</h2>

                <p><b>Application:</b> Node.js</p>
                <p><b>Container:</b> Docker</p>
                <p><b>Registry:</b> AWS ECR</p>
                <p><b>Platform:</b> ECS Fargate</p>
                <p><b>Hostname:</b> ${os.hostname()}</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
