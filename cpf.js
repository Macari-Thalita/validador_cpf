// Exercício Validador de CPF
// Thalita Regina Macari - RA 8169250

// ATENÇÃO! Necessário rodar comando para baixar o pacote prompt-sync (package JSON incluso caso prefira)
// Necessário rodar no terminal para conseguir informar o código
// npm i prompt-sync
// node cpf.js (para rodar o código).


//Construtor da função
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cleanCPF', {
      get: function () {
        return cpfEnviado.replace(/\D+/g, '')
      }
    })
  }
  
  //Validação inicial do CPF
  ValidaCPF.prototype.validate = function () {
    if (typeof this.cleanCPF === 'undefined') return false
    if (this.cleanCPF.length !== 11) return false
    if (this.isSequencia()) return false
  
    const cpfParcial = this.cleanCPF.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
  
    const novoCPF = cpfParcial + digito1 + digito2
  
    return novoCPF === this.cleanCPF
  }
  
  ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
  
    let regressivo = cpfArray.length + 1
    let total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val)
      regressivo--
      return ac
    }, 0)
  
//Cálculo do resto do total
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
  }
  ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cleanCPF[0].repeat(this.cleanCPF.length)
    return sequencia === this.cleanCPF
  }
  
  //Captura o CPF
  let prompt = require('prompt-sync')()
  let cpf = prompt('Informe o CPF: ')
  cpf = new ValidaCPF(cpf)
  
  //Chama a função para validar o CPF
  if (cpf.validate()) {
    console.log('O CPF informado é válido!')
  } else {
    console.log('O CPF informado é inválido!')
  }
