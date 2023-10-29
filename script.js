let carrinho = [];

function adicionarAoCarrinho(productId) {
    // Aqui, você pode buscar os detalhes do produto com base no productId
    const produto = {
        id: productId,
        nome: "Nome do Produto",  // Substitua pelo nome real do produto
        preco: 10.99,  // Substitua pelo preço real do produto
    };

    // Verifique se o produto já está no carrinho
    const produtoExistente = carrinho.find(item => item.id === productId);

    if (produtoExistente) {
        // Se o produto já estiver no carrinho, aumente a quantidade
        produtoExistente.quantidade += 1;
    } else {
        // Caso contrário, adicione o produto ao carrinho com quantidade 1
        produto.quantidade = 1;
        carrinho.push(produto);
    }

    // Exiba uma mensagem informando que o produto foi adicionado ao carrinho
    // alert(`Produto ${produto.nome} adicionado ao carrinho!`);

    // Você pode adicionar mais lógica aqui, como atualizar a exibição do carrinho
    // ou enviar os dados do carrinho para um servidor, se necessário.
}

// Exemplo de uso:
// adicionarAoCarrinho(1); // Adiciona o produto com ID 1 ao carrinho
// adicionarAoCarrinho(2); // Adiciona o produto com ID 2 ao carrinho

// Para visualizar o carrinho, você pode usar "console.log(carrinho);"
