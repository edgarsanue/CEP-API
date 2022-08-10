//////////////////////SCRIPT////////////////////////////////////

const preencherForm = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const searchCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados =  await fetch(url);
    const endereco = await dados.json();
    preencherForm(endereco);   
}

document.getElementById('cep').addEventListener('focusout', searchCep)

