class OpcaoCardapio {
  nomePrato: string
  descricaoPrato: string
  imagem: string

  constructor(nomePrato: string, descricaoPrato: string, imagem: string) {
    ;(this.nomePrato = nomePrato),
      (this.descricaoPrato = descricaoPrato),
      (this.imagem = imagem)
  }
}

export default OpcaoCardapio
