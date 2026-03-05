const lista = document.getElementById("lista")
const form = document.getElementById("form")

const API = "http://localhost:3000"

async function carregarAtendimentos() {

const resposta = await fetch(`${API}/atendimentos`)
const dados = await resposta.json()

lista.innerHTML = ""

dados.forEach(atendimento => {

lista.innerHTML += `
<tr class="nova-linha">
<td>${atendimento.id}</td>
<td>${atendimento.cliente}</td>
<td>${atendimento.servico}</td>

<td>

<button onclick="editar(${atendimento.id},'${atendimento.cliente}','${atendimento.servico}')" 
class="btn btn-warning btn-sm">
✏
</button>

<button onclick="deletar(${atendimento.id})" 
class="btn btn-danger btn-sm">
<i class="bi bi-trash"></i>
</button>

</td>
</tr>
`

})

}

async function editar(id, clienteAtual, servicoAtual){

const cliente = prompt("Novo cliente:", clienteAtual)
const servico = prompt("Novo serviço:", servicoAtual)

if(!cliente || !servico) return

await fetch(`/atendimento/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
cliente,
servico
})
})

carregarAtendimentos()

}

form.addEventListener("submit", async (e)=>{

e.preventDefault()

const cliente = document.getElementById("cliente").value
const servico = document.getElementById("servico").value

await fetch(`${API}/atendimentos`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
cliente,
servico
})
})

form.reset()

carregarAtendimentos()

})

async function deletar(id){

await fetch(`${API}/atendimento/${id}`,{
method:"DELETE"
})

carregarAtendimentos()

}

carregarAtendimentos()