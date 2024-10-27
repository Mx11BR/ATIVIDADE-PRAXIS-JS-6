const alunos = [];

function cadastrarAluno(nome, idade) {
 
  const maiorIdade = idade >= 18;
  
  const aluno = {
    nome: nome,
    idade: idade,
    maiorIdade: maiorIdade
  };
  
  alunos.push(aluno);
  console.log(`Aluno ${nome} cadastrado com sucesso!`);
}

function listarAlunos() {
  console.log("Lista de Alunos Cadastrados:");
  alunos.forEach(aluno => {
    const statusIdade = aluno.maiorIdade ? "Maior de Idade" : "Menor de Idade";
    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, ${statusIdade}`);
  });
}

cadastrarAluno("Carlos", 17); 
cadastrarAluno("Ana", 20);  
listarAlunos();
