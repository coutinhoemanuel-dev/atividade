function ExibirDataAtual(){
    const agora =new Date();
    const dia =String(agora.getDate())
    const mes = String(agora.getMonth())
    const ano = agora.getFullyear();

    const dataFormatada = `${dia}/${mes}/${ano}`
    document.getElementById('data-blog').innerText = dataFormatada;
}
ExibirDataAtual();