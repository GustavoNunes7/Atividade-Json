fetch('https://dog.ceo/api/breed/husky/images/random')
    // fetch retorna uma PROMISE (Algo que vai chegar depois)
    .then(resposta => resposta.json())
    //JSON é o formato de padrão de dados usados em APIs

    .then(dados =>{
        //Os dados agora contem o objeto retornando pela API


        //Mostra no console o objeto completo retornado
        console.log('✅ Dados Completos da API:', dados);
        //Mostrar a URL da imagem
        console.log('🗺️ - URL da imagem', dados.message);
        
        
    })

async function testarAPI() {
    
    //await significa: espere a resposta chegar antes de continuar
    const resposta = await fetch('https://dog.ceo/api/breed/husky/images/random')

    //Precisamos converter a resposta em JSON
    const dados = await resposta.json();

    console.log('📦 Resposta do API:' , dados);
    
    console.log('🐩 Imagem do cachorro:' ,dados.message);
    
}

//chamamos a função para executar a API
testarAPI();