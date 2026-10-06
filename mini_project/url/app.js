//create a server

import { readFile } from 'fs/promises';
import { createServer } from 'http';
import path from 'path';

const PORT = 3004;

async function serveFile(res, filePath, contentType) {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (error) {
        console.error(`Failed to read ${filePath}:`, error);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 page not Found');
    }
}

const loadLinks = async () => {
        try{
            const data = await readFile(url, 'utf-8');
            return json.parse(data);
        }catch(error){
          if(error.code === 'ENOENT'){
            await writeFFile(DATA_FILE, json.stringify({}))
            return {};
          }
          throw error
    }
}

const server = createServer(async (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            await serveFile(res, path.join('public', 'index.html'), 'text/html');
        } else if (req.url === '/style.css') {
            await serveFile(res, 'style.css', 'text/css');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 page not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

if(req.method === 'POST' && req.url === '/shorten'){
    const links = await loadLinks();
    const body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", () =>{
        console.log("Received data:", body);
        const {url, shortCode} = JSON.parse(body);
    })
}

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
