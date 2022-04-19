'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
        // infoとして標準出力する　ターミナルに表示する
        console.info(`[${new Date()}] Requested by ${req.socket.remoteAddress}`);
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.write(req.headers['user-agent']);
        res.end();
    })
    // createServerで作成したオブジェクトにonメソッドを接続する => {}).on('error'
    // node index.js 2>&1 | tee -a application.log で標準出力と一緒に保存できる
    .on('error', e => {
        console.error(`[${new Date()}] Server Error`, e);
    })
    .on('clientError', e => {
        console.error(`[${new Date()}] Client Error`, e);
    });

const port = 8000;
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});
