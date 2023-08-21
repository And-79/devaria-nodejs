const readline= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log('Esse programa vai checar se voce e maior de 18 anose tem habilidades para saber se voce pode entrar n Kart')
console.log('Alem das suas verifcacoes, precisamos verificar se voce esta na lista de presença do horario')

readline.question('Qual o ano do seu nascimento?' , ano => {
    if(ano > 20224) {
        console.log("Voce nao tem 18 anos ");
    }else{
        readline.question("Voce tem habilitaçao? {Sim/Nao}", tem habilitacao => {
            if(!(temHabilitacao.toUpperCase() === "Sim")){
                console.log('Voce nao tem habilitacao para entrar o Kart');
            }else{
                readline.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Ben vindo ao Kart Douglas');
                            break;
                        case  'Rafael' :
                            console.log('Ben vindo ao Kart Rafael');
                            break;
                        default;
                            console.log('Seu nome nao foi identificado na lista de presença');         
                    }
                });
            }            
   
        })
    }  
})
