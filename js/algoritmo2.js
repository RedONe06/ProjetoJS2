var nomeDisciplina, aulasDisciplina, nomeAluno, n1, n2, faltasAluno, resp, frequencia

nomeDisciplina = prompt("Informe o nome da disciplina: ")
aulasDisciplina = Number(prompt("Quantas aulas tem a disciplina? "))
nomeAluno = prompt("Informe o nome do aluno: ")
n1 = Number(prompt("Informe a nota 1: "))
n2 = Number(prompt("Informe a nota 2: "))
faltasAluno = Number(prompt("Quantas faltas ele possui?"))

frequencia = ((aulasDisciplina-faltasAluno)/aulasDisciplina)*100
media = (n1+n2)/2

if(media>=0 && media<=10){
    if(frequencia>=75 && media>=6){
        resp = "Você foi aprovado"
    } else {
        resp = "Você foi reprovado"
    }

    document.write(
        `<div class="container">
            <div class="informacoes">
                <h2 class="primeiro">Nome da disciplina: </h2>
                <h3>${nomeDisciplina}</h3> <br>
                <h2>Aulas da disciplina: </h2>
                <h3>${aulasDisciplina}</h3> <br>
                <h2>Aluno: </h2>
                <h3>${nomeAluno} </h3> <br>
                <h2>Nota 1: </h2>
                <h3>${n1} </h3>  <br>
                <h2>Nota 2: </h2>
                <h3>${n2} </h3>  <br>
                <h2>Faltas do aluno: </h2>
                <h3>${faltasAluno} </h3> <br>
                <h2>Frequencia total: </h2>
                <h3>${frequencia} </h3> <br>
                <h2>Média: </h2>
                <h3>${media} </h3> <br>
                <h2>Conclusão: </h2>
                <h3 class="ultimo">${resp}</h3> 
            </div>
        </div>`
    )
} else {
    resp = "Erro: média acima de 10"
    document.write(resp)
}

