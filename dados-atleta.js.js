class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // Método para calcular a categoria do atleta
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return 'Infantil';
    } else if (this.idade >= 12 && this.idade <= 13) {
      return 'Juvenil';
    } else if (this.idade >= 14 && this.idade <= 15) {
      return 'Intermediário';
    } else if (this.idade >= 16 && this.idade <= 30) {
      return 'Adulto';
    } else {
      return 'Sem categoria';
    }
  }

  // Método para calcular o IMC do atleta
  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  // Método para calcular a média válida das notas do atleta
  calculaMediaValida() {
    //notas em ordem crescente
    const notasOrdenadas = this.notas.sort((a, b) => a - b);
    //descartar a maior e menor nota
    const notasFiltradas = notasOrdenadas.slice(1, -1);
    //calcular media válida das notas filtradas
    const somaNotas = notasFiltradas.reduce((total, nota) => total + nota, 0);
    return somaNotas / notasFiltradas.length;
  }

  // método para obter as notas válidas (sem a maior e menor)
  obtemNotasValidas() {
    const notasOrdenadas = this.notas.sort((a, b) => a - b);
    // Remover a maior e a menor nota
    return notasOrdenadas.slice(1, -1);
  }

  // Métodos para obter os dados do atleta
  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }

  // implementação método para classificar o IMC conforme dados da OMS
  classificarIMC() {
    const imc = this.calculaIMC();
    if (imc < 18.5) {
      return 'Baixo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso adequado';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      return 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade extrema';
    }
  }
}

// Exemplo de entrada para criar os atletas
const atletas = [
  new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]),
  new Atleta("Daiane Jelinsky", 18, 59, 1.60, [7, 10, 9.5, 9.5, 8]),
  new Atleta("Bruno Castro", 16, 50, 1.49, [10, 10, 10, 9, 9.5]),
  new Atleta("Izidoro Cunha", 42, 79, 1.80, [9.9, 10, 9.8, 9.8, 10])
];

// Exibindo as informações dos atletas
atletas.forEach(atleta => {
  console.log("-----------------------------");
  console.log("------ DADOS DO ATLETA ------")
  console.log("-----------------------------");
  console.log(`Atleta: ${atleta.obtemNomeAtleta()}`);
  console.log(`Idade: ${atleta.obtemIdadeAtleta()} anos`);
  console.log(`Peso: ${atleta.obtemPesoAtleta().toFixed(2)} kg`);
  console.log(`Altura:${atleta.obtemAlturaAtleta().toFixed(2)} m `);
  console.log(`Notas dos jurados: ${atleta.obtemNotasAtleta()}`);
  console.log(`Notas válidas: ${atleta.obtemNotasValidas()}`);
  console.log(`IMC: ${atleta.obtemIMC().toFixed(2)} (${atleta.classificarIMC()})`);
  console.log(`Categoria: ${atleta.obtemCategoria()}`);
  console.log(`Média Válida: ${atleta.obtemMediaValida().toFixed(2)}\n`);
  console.log(".............................\n");
});
