class Restaurante {
  nome: string
  descricao: string
  imagem: string
  nota: string
  infos: string[]
  link: string
  id: number

  constructor(
    nome: string,
    descricao: string,
    imagem: string,
    nota: string,
    infos: string[],
    link: string,
    id: number
  ) {
    ;(this.nome = nome),
      (this.descricao = descricao),
      (this.imagem = imagem),
      (this.nota = nota),
      (this.infos = infos),
      (this.id = id),
      (this.link = link)
  }
}

export default Restaurante
