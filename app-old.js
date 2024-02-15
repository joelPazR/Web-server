import http from 'node:http';
http.createServer((req, res) => {
    // console.log(req)
    // res.setHeader('Content-Disposition', 'attachment; filname=list.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'})
    res.write('Hello world');
    res.end();
}).listen(8080);
console.log('Escuchando puerto 8080');
