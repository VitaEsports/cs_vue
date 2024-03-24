const app = require('express')();
const express = require('http').createServer(app);
var serveStatic = require('serve-static');
var path = require('path');
app.use(serveStatic(__dirname + "/dist"));
const io = require('socket.io')(express);
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;
const URL = process.env.CONTENT_URL || '';
const SERVER_TOKEN = process.env.TOKEN || '';
const STEAM_API = process.env.STEAM_API || 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
const API_KEY = process.env.API_KEY || '';
const DEBUG = process.env.DEBUG || false;


app.get('/', async function (req, res) {
    if (URL === undefined || URL === null || URL === '') {
        res.sendFile(__dirname +'/public/index.html');
        return;
    }
    const response = await getUrlContent(URL);
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(addImports(response)));
});

app.post('/', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    let body = '';
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function() {
        let json = JSON.parse(body);
        let allowedTokens = toArray(SERVER_TOKEN, ",");
        if(allowedTokens.length === 0 || allowedTokens.includes(getToken(json))) {
            update(json);
        } else {
            console.log('Invalid token');
        }
        res.end('');
    });
});


app.get('/img/*', function(req, res) {
    res.sendFile(__dirname + '/public' + req.path);
});

app.get('/profile/*', async function (req, res) {
    let steam_url = STEAM_API + "?key=" + API_KEY + "&steamids=" + req.path.split('/')[2];
    const response = await getUrlContent(steam_url);
    let image = JSON.parse(response)["response"]["players"][0]["avatarfull"]
    res.send(image);
});

io.on('connection', function (_) {
    console.log('socket connection established');
});

express.listen(PORT, function() {
    console.log('\n\tOpen http://localhost:'+PORT+' in a browser to connect to HUD');
    console.log('\n');
});

function update(json) {
    if(DEBUG) {
        console.log(JSON.stringify(json));
    }
    io.emit("update", JSON.stringify(json));
}

function addImports(body) {
    if(!body.includes('/jquery')) {
        body = body.replace('</body>', '<script src="https://code.jquery.com/jquery-3.7.0.slim.js"></script></body>');
    }
    if(!body.includes('src="/socket.io/socket.io.js"')) {
        body = body.replace('</body>', '<script src="/socket.io/socket.io.js"></script></body>');
    }
    return body;
}

async function getUrlContent(uri) {
    const response = await fetch(uri).catch(err => {
        //isNotOk(err, 'Promise error');
        done();
    });
    let body = await response.text().catch(err => {
        //isNotOk(err, 'Promise error');
        done();
    });
    return body;
}

function getToken(json) {
    let token = json["auth"]["token"];
    if(DEBUG) {
        console.log('Token provided: ' + token)
    }
    return token;
}

function toArray(str, split) {
    if(str === undefined || str === null || str === '') {
        return [];
    }
    return str.split(split);
}
