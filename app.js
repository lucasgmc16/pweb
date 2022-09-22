const express = require ("express");
const {randomUUID} = require("crypto")

const app = express();

app.use(express.json());

const products = [];

/**
 * POST é para inserir um dado
 * GET é para buscar um ou mais dados
 * PUT é para alterar um dado
 * DELETE é para remover um dado
 */

/**
 * Body ---> Sempre que você quiser enviar dados para a sua aplicação
 * Params -> /product/9849521954985                   os números são parâmetros 
 * Query --> /product?id=98743241821389&value=81291585458
 */

app.post("/products", (request, response) => {
    //Nome e preço

    const {name, price} = request.body;

    const product = {
        name,
        price,
        id: randomUUID(),
    }
    
     products.push(product);

     return response.json(product);
});

app.get("/products", (reques, response) => {
    return response.json(products);
});

app.get("/products/:id", (request, response) => {
    const {id} = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product);
})

app.put("/products/:id", (request, response) => {
    const {id} = request.params;
    const {name, price} = request.body;

    const productIndex = product.findIndex(product => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price,
    };

    return response.json({message: "Produto alterado com sucesso"});
});

app.delete("/products/:id", (request, response) => {
    const {id} = request.params;

    const productIndex = products.findIndex((product) => product.id === id);

    products.splice(productIndex, 1);

    return response.json({message: "Produto removido com suceesso!"});

})

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));
