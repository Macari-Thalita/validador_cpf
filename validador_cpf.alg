ALGORITMO "Validador de CPF"
// FUN??O : Realizar a valida??o dos digitos de um CPF
// AUTOR : THALITA REGINA MACARI | RA: 8169250
// DATA : 05/10/2022
// SE??O DE DECLARA??ES

VAR
   CPF: CARACTER
   NUM_CPF:VETOR[1..11] DE INTEIRO
   SOMA1:VETOR [1..9] DE INTEIRO
   SOMA2:VETOR[1..10] DE INTEIRO
   C1:INTEIRO
   C2:INTEIRO
   I:INTEIRO
   RESTO1:INTEIRO
   RESTO2:INTEIRO

INICIO
      ESCREVAL("Valide seu Cadastro de Pessoa F?sica!")
      ESCREVAL("Digite o CPF (SEM PONTUA??O!):")
      LEIA(CPF)
      
      PARA I DE 1 ATE 11 FACA
           NUM_CPF[I]:= CARACPNUM(COPIA(CPF,I,1))
      FIMPARA

      PARA I DE 1 ATE 9 FACA
           SOMA1[I]:= NUM_CPF[I] * (11 - I)
           C1:= C1 + SOMA1[I]
      FIMPARA
           RESTO1:=C1 MOD 11

      SE (RESTO1 < 2) ENTAO
         RESTO1:=0
      SENAO
         RESTO1:= 11 - RESTO1
      FIMSE

      PARA I DE 1 ATE 10 FACA
         SOMA2[I]:= NUM_CPF[I] * (12 - I)
         C2:= C2 + SOMA2[I]
      FIMPARA
         RESTO2:= C2 MOD 11
         
      SE (RESTO2 < 2) ENTAO
         RESTO2:=0
      SENAO
         RESTO2:= 11 - RESTO2
      FIMSE
      
      SE(RESTO1 = NUM_CPF[10]) E (RESTO2 = NUM_CPF[11]) ENTAO
      ESCREVA("O CPF ", CPF, " ? v?lido!")
      SENAO
      ESCREVA("O CPF ", CPF, " n?o ? v?lido!")
      FIMSE
FIMALGORITMO
