let cpf = [];
let cnpj = [];
const peso1Cnpj1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
const peso1Cnpj2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
let estado = false;
let estadoOpcao = 0;
let animacao = false;
let pontuacao = document.querySelector("#opcao-cpf-sim").checked = true;
    pontuacao = document.querySelector("#opcao-cnpj-sim").checked = true

const estados = [
  { sigla: "rs", nome: "rio grande do sul", nonoDigitoCpf: "0" },
  { sigla: "df", nome: "distrito federal", nonoDigitoCpf: "1" },
  { sigla: "go", nome: "goiás", nonoDigitoCpf: "1" },
  { sigla: "mt", nome: "mato grosso", nonoDigitoCpf: "1" },
  { sigla: "ms", nome: "mato grosso do sul", nonoDigitoCpf: "1" },
  { sigla: "to", nome: "tocantins", nonoDigitoCpf: "1" },
  { sigla: "am", nome: "amazonas", nonoDigitoCpf: "2" },
  { sigla: "pa", nome: "pará", nonoDigitoCpf: "2" },
  { sigla: "rr", nome: "roraima", nonoDigitoCpf: "2" },
  { sigla: "ap", nome: "amapá", nonoDigitoCpf: "2" },
  { sigla: "ac", nome: "acre", nonoDigitoCpf: "2" },
  { sigla: "ro", nome: "rondônia", nonoDigitoCpf: "2" },
  { sigla: "ce", nome: "ceará", nonoDigitoCpf: "3" },
  { sigla: "ma", nome: "maranhão", nonoDigitoCpf: "3" },
  { sigla: "pi", nome: "piauí", nonoDigitoCpf: "3" },
  { sigla: "pb", nome: "paraíba", nonoDigitoCpf: "4" },
  { sigla: "pe", nome: "pernambuco", nonoDigitoCpf: "4" },
  { sigla: "al", nome: "alagoas", nonoDigitoCpf: "4" },
  { sigla: "rn", nome: "rio grande do norte", nonoDigitoCpf: "4" },
  { sigla: "ba", nome: "bahia", nonoDigitoCpf: "5" },
  { sigla: "se", nome: "sergipe", nonoDigitoCpf: "5" },
  { sigla: "mg", nome: "minas gerais", nonoDigitoCpf: "6" },
  { sigla: "rj", nome: "rio de janeiro", nonoDigitoCpf: "7" },
  { sigla: "es", nome: "espírito santo", nonoDigitoCpf: "7" },
  { sigla: "sp", nome: "são paulo", nonoDigitoCpf: "8" },
  { sigla: "pr", nome: "paraná", nonoDigitoCpf: "9" },
  { sigla: "sc", nome: "santa catarina", nonoDigitoCpf: "9" }
];

function gerarCpf(){
    cpf = [];
    for(let i = 0; i<8;i++){
        let numeroAtual = Math.floor(Math.random()*10);
        cpf.push(numeroAtual)
    }
    if(estado == true){
        cpf.push(estadoOpcao)
    }
    else{
        cpf.push(Math.floor(Math.random() *10))
    }
}

function calcularD1(){
    let resultado = 0;
    for(let i = 0;i<9;i++){
        resultado += (10-i)*cpf[i];
    }
    resultado = resultado%11;

    if(resultado<2){
        resultado = 0;
    }
    else{
        resultado = 11 - resultado;        
    }
    cpf.push(resultado);
    
}
function calcularD2(){
    let resultado = 0;
    for(let i = 0;i<10;i++){
        resultado += (11-i)*cpf[i];
    }
    resultado = resultado%11;

    if(resultado<2){
        resultado = 0;
    }
    else{
        resultado = 11 - resultado;        
    }
    cpf.push(resultado);
   
}

function atualizarSite(){
    let cpfAtual = "";
    pontos = false;
    pontuacao = document.querySelector("#opcao-cpf-sim").checked
    if(pontuacao == true){
        pontos = true
    }
    for(let i = 0;i<11;i++){
        cpfAtual = cpfAtual + cpf[i];
        if(pontos == true && ((i+1)%3 == 0) && i<6){
            cpfAtual += "."
        }
        else if(pontos == true && i == 8){
            cpfAtual +="-"
        }
    }
    document.querySelector(".resultado-cpf").innerHTML = cpfAtual;
}


function Gerar(){
    selecionarEstado()
    gerarCpf();
    calcularD1();
    calcularD2();
    atualizarSite();
}

function movimetar(butao){
    if (animacao == true){
        return;
    }
    animacao = true;
    let butaoMover = document.querySelector(`${butao}`);
    butaoMover.style.transform = "translateY(0.5rem)"; 
    setTimeout(() =>{
        butaoMover.style.transform = "translateY(-0.5rem)"; 
        setTimeout(() =>{
        butaoMover.style.transform = "translateY(0rem)"; 
        animacao = false;
        },150);
    },150);
}

function selecionarEstado(){
    let estadoInput = document.querySelector("#pesquisarEstado").value;

    for (let i = 0; i < estados.length; i++) {
        if(estadoInput
             == estados[i].sigla){
            estadoOpcao = estados[i].nonoDigitoCpf;
            estado = true;
            return;
        }
    }
    estadoOpcao = 0;
    estado = false;
    return;
}
// parte do cnpj

function gerarCnpj(){
    cnpj = [];
    for(let i = 0; i<12;i++){
        let numeroAtual = Math.floor(Math.random()*10);
        cnpj.push(numeroAtual)
    }
}

function calcularD1Cnpj(){
    let resultado = 0;
    for(let i = 0;i<12;i++){
        resultado += peso1Cnpj1[i]* cnpj[i];
    }
    console.log(resultado)
    resultado = resultado%11;

    if(resultado<2){
        resultado = 0;
    }
    else{
        resultado = 11 - resultado;        
    }
    cnpj.push(resultado);
    
    
}
function calcularD2Cnpj(){
    let resultado = 0;
    for(let i = 0;i<13;i++){
        resultado += peso1Cnpj2[i]*cnpj[i];
    }
    resultado = resultado%11;

    if(resultado<2){
        resultado = 0;
    }
    else{
        resultado = 11 - resultado;        
    }
    cnpj.push(resultado);
   
}

function atualizarSiteCnpj(){
    let cnpjAtual = "";
    pontos = false;
    pontuacao = document.querySelector("#opcao-cnpj-sim").checked
    if(pontuacao == true){
        pontos = true
    }
    for(let i = 0;i<14;i++){
        cnpjAtual = cnpjAtual + cnpj[i];
        if(pontos == true){
            if(i == 1 || i == 4){
                cnpjAtual += ".";
            }
            else if(i == 7){
                cnpjAtual += "/";
            }
            else if(i == 11){
                cnpjAtual += "-";
            }   
        }
        
    }
    document.querySelector(".resultado-cnpj").innerHTML = cnpjAtual;
}

function copiar(texto){
    const span = document.querySelector(`.${texto}`);
    const textoTemporario = document.createElement("textarea");
    textoTemporario.value = span.textContent;
    textoTemporario.style.position ="fixed";
    textoTemporario.style.left ="-99999rem";
    document.body.appendChild(textoTemporario)
    textoTemporario.select();
    document.execCommand('copy')
    document.body.removeChild(textoTemporario)
}


function GerarCNPj(){
     gerarCnpj();
     calcularD1Cnpj();
     calcularD2Cnpj();
     atualizarSiteCnpj();
}

Gerar()
GerarCNPj();