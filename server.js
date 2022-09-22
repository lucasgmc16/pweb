const http = require("http");

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });

        if(request.url === '/RotaTeste2') {
            response.end(JSON.stringify({
                message: "Rota de teste 2"
            }))
        }

        if(request.url === '/RotaTeste3') {
            response.end(JSON.stringify({
                message: "Rota de teste 3"
            }))
        }

        response.end
            (JSON.stringify({
                message: "teste 1"
            })
        );
    })
    .listen(4001, () => console.log ("Servidor está rodando na porta 4001"))