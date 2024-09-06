import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { RootReducer } from '../../store'
import * as Yup from 'yup'
import {
  CheckoutContainer,
  ContainerFormEntrega,
  ContainerFormPagamento,
  ContainerPagConcluido,
  FormularioInfos,
  InputInfo,
  InputInfoTwoCamps,
  TextoPagConcluido
} from './styles'
import { Overlay, Sidebar } from '../Cart/styles'
import { cores } from '../../styles'
import {
  closeInfosEntrega,
  closeInfosPagamento,
  closePagConcluido,
  openInfosEntrega,
  openInfosPagamento,
  openPagConcluido
} from '../../store/reducers/checkout'
import { clean, open } from '../../store/reducers/cart'
import { formataPreco } from '../Cardapio'
import { calculaTotalCarrinho } from '../Cart'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { infosEntregaAberto, infosPagamentoAberto, pagamentoConcluido } =
    useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const voltarCarrinho = () => {
    dispatch(closeInfosEntrega())
    dispatch(open())
  }

  const abrirInfosPagamento = () => {
    dispatch(closeInfosEntrega())
    dispatch(openInfosPagamento())
  }

  const fecharInfosPagamento = () => {
    dispatch(closeInfosPagamento())
    dispatch(openInfosEntrega())
  }

  const abrirPagConcluido = () => {
    dispatch(closeInfosPagamento())
    dispatch(openPagConcluido())
  }

  const fecharPagConcluido = () => {
    dispatch(closePagConcluido())
  }

  const limparCarrinho = () => {
    dispatch(clean())
  }

  const verificarErroCampo = (nomeCampo: string) => {
    const campoTocado = nomeCampo in formulario.touched
    const estaInvalido = nomeCampo in formulario.errors
    const temErro = campoTocado && estaInvalido

    return temErro
  }

  const formulario = useFormik({
    initialValues: {
      remetente: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',

      nomeTitular: '',
      numeroCartao: '',
      codigoCvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      remetente: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo deve ter 8 dígitos do CEP')
        .max(9, 'O campo deve ter 8 dígitos do CEP')
        .required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),
      complemento: Yup.string(),

      nomeTitular: Yup.string()
        .min(10, 'O nome do titular deve ter pelo menos 10 caracteres')
        .required('Campo obrigatório'),
      numeroCartao: Yup.string().required('Campo obrigatório'),
      codigoCvv: Yup.string().required('Campo obrigatório'),
      mesVencimento: Yup.string().required('Campo obrigatório'),
      anoVencimento: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (valores) => {
      //aqui será feita depois toda a lógica pra ser feito o post para o banco de dados
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: valores.remetente,
          adress: {
            description: valores.endereco,
            city: valores.cidade,
            zipCode: valores.cep,
            number: Number(valores.numero),
            complement: valores.complemento
          }
        },
        payment: {
          card: {
            name: valores.nomeTitular,
            number: valores.numeroCartao,
            code: Number(valores.codigoCvv),
            expires: {
              year: Number(valores.anoVencimento),
              month: Number(valores.mesVencimento)
            }
          }
        }
      })
    }
  })

  return (
    <CheckoutContainer
      className={
        infosEntregaAberto || infosPagamentoAberto || pagamentoConcluido
          ? 'checkout-visivel'
          : ''
      }
    >
      <Overlay />
      <Sidebar>
        {isSuccess && data && pagamentoConcluido ? (
          <ContainerPagConcluido>
            <h3>Pedido realizado - {data.orderId}</h3>
            <TextoPagConcluido>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </TextoPagConcluido>
            <br />
            <TextoPagConcluido>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </TextoPagConcluido>
            <br />
            <TextoPagConcluido>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </TextoPagConcluido>
            <br />
            <TextoPagConcluido>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </TextoPagConcluido>
            <button
              type="button"
              onClick={() => {
                fecharPagConcluido()
                limparCarrinho()
              }}
            >
              Concluir
            </button>
          </ContainerPagConcluido>
        ) : (
          <>
            <ContainerFormEntrega
              className={infosEntregaAberto ? 'visivel' : ''}
            >
              <h3 style={{ color: `${cores.branco}` }}>Entrega</h3>
              <FormularioInfos onSubmit={formulario.handleSubmit}>
                <InputInfo>
                  <label htmlFor="remetente">Quem irá receber</label>
                  <input
                    type="text"
                    id="remetente"
                    value={formulario.values.remetente}
                    className={verificarErroCampo('remetente') ? 'error' : ''}
                    onChange={formulario.handleChange}
                    onBlur={formulario.handleBlur}
                  />
                  {verificarErroCampo('remetente') ? (
                    <span>Campo obrigatório!</span>
                  ) : (
                    ''
                  )}
                </InputInfo>
                <InputInfo>
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    type="text"
                    id="endereco"
                    value={formulario.values.endereco}
                    className={verificarErroCampo('endereco') ? 'error' : ''}
                    onChange={formulario.handleChange}
                    onBlur={formulario.handleBlur}
                  />
                  {verificarErroCampo('endereco') ? (
                    <span>Campo obrigatório!</span>
                  ) : (
                    ''
                  )}
                </InputInfo>
                <InputInfo>
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    value={formulario.values.cidade}
                    className={verificarErroCampo('cidade') ? 'error' : ''}
                    onChange={formulario.handleChange}
                    onBlur={formulario.handleBlur}
                  />
                  {verificarErroCampo('cidade') ? (
                    <span>Campo obrigatório!</span>
                  ) : (
                    ''
                  )}
                </InputInfo>
                <InputInfoTwoCamps>
                  <div>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      id="cep"
                      className={verificarErroCampo('cep') ? 'error' : ''}
                      value={formulario.values.cep}
                      onChange={formulario.handleChange}
                      onBlur={formulario.handleBlur}
                      mask="99999-999"
                    />
                    {verificarErroCampo('cep') ? (
                      <span>Campo obrigatório!</span>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <label htmlFor="numero">Número</label>
                    <input
                      type="number"
                      id="numero"
                      value={formulario.values.numero}
                      className={verificarErroCampo('numero') ? 'error' : ''}
                      onChange={formulario.handleChange}
                      onBlur={formulario.handleBlur}
                    />
                    {verificarErroCampo('numero') ? (
                      <span>Campo obrigatório!</span>
                    ) : (
                      ''
                    )}
                  </div>
                </InputInfoTwoCamps>
                <InputInfo>
                  <label htmlFor="complemento">Complemento(opcional)</label>
                  <input
                    type="text"
                    id="complemento"
                    value={formulario.values.complemento}
                    onChange={formulario.handleChange}
                    onBlur={formulario.handleBlur}
                  />
                </InputInfo>

                <div style={{ marginTop: '8px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      if (formulario.isValid && formulario.dirty) {
                        abrirInfosPagamento()
                      } else {
                        alert(
                          'Preencha os dados de entrega corretamente por favor!'
                        )
                      }
                    }}
                  >
                    Continuar com o pagamento
                  </button>
                  <button type="button" onClick={voltarCarrinho}>
                    Voltar para o carrinho
                  </button>
                </div>
              </FormularioInfos>
            </ContainerFormEntrega>

            <ContainerFormPagamento
              className={infosPagamentoAberto ? 'visivel' : ''}
            >
              <h3>
                Pagamento - Valor a pagar{' '}
                {formataPreco(calculaTotalCarrinho(items))}
              </h3>
              <FormularioInfos onSubmit={formulario.handleSubmit}>
                <InputInfo>
                  <label htmlFor="nomeTitular">Nome no cartão</label>
                  <input
                    type="text"
                    id="nomeTitular"
                    value={formulario.values.nomeTitular}
                    className={verificarErroCampo('nomeTitular') ? 'error' : ''}
                    onChange={formulario.handleChange}
                    onBlur={formulario.handleBlur}
                  />
                  {verificarErroCampo('nomeTitular') ? (
                    <span>Campo obrigatório!</span>
                  ) : (
                    ''
                  )}
                </InputInfo>
                <InputInfoTwoCamps>
                  <div style={{ maxWidth: '228px', width: '100%' }}>
                    <label htmlFor="numeroCartao">Número do cartão</label>
                    <InputMask
                      style={{ width: '100%' }}
                      id="numeroCartao"
                      value={formulario.values.numeroCartao}
                      className={
                        verificarErroCampo('numeroCartao') ? 'error' : ''
                      }
                      onChange={formulario.handleChange}
                      onBlur={formulario.handleBlur}
                      mask="9999 9999 9999 9999"
                    />
                    {verificarErroCampo('numeroCartao') ? (
                      <span>Campo obrigatório!</span>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <label htmlFor="codigoCvv">CVV</label>
                    <InputMask
                      id="codigoCvv"
                      value={formulario.values.codigoCvv}
                      className={verificarErroCampo('codigoCvv') ? 'error' : ''}
                      onChange={formulario.handleChange}
                      onBlur={formulario.handleBlur}
                      mask="999"
                    />
                    {verificarErroCampo('codigoCvv') ? (
                      <span>Campo obrigatório!</span>
                    ) : (
                      ''
                    )}
                  </div>
                </InputInfoTwoCamps>
                <InputInfoTwoCamps>
                  <div>
                    <label htmlFor="mesVencimento">Mês do vencimento</label>
                    <InputMask
                      id="mesVencimento"
                      value={formulario.values.mesVencimento}
                      className={
                        verificarErroCampo('mesVencimento') ? 'error' : ''
                      }
                      onChange={formulario.handleChange}
                      onBlur={formulario.handleBlur}
                      mask="99"
                    />
                    {verificarErroCampo('mesVencimento') ? (
                      <span>Campo obrigatório!</span>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <label htmlFor="anoVencimento">Ano do vencimento</label>
                    <InputMask
                      id="anoVencimento"
                      value={formulario.values.anoVencimento}
                      className={
                        verificarErroCampo('anoVencimento') ? 'error' : ''
                      }
                      onChange={formulario.handleChange}
                      onBlur={formulario.handleBlur}
                      mask="9999"
                    />
                    {verificarErroCampo('anoVencimento') ? (
                      <span>Campo obrigatório!</span>
                    ) : (
                      ''
                    )}
                  </div>
                </InputInfoTwoCamps>
                <div>
                  <button
                    type="submit"
                    title="Clique aqui para finalizar o pagamento"
                    onClick={() => {
                      if (formulario.isValid && formulario.dirty) {
                        formulario.handleSubmit()
                        abrirPagConcluido()
                      } else {
                        alert(
                          'Preencha os dados de pagamento corretamente por favor!'
                        )
                      }
                    }}
                  >
                    {isLoading
                      ? 'Finalizando compra ...'
                      : 'Finalizar o pagamento'}
                  </button>
                  <button type="button" onClick={fecharInfosPagamento}>
                    Voltar para edição do endereço
                  </button>
                </div>
              </FormularioInfos>
            </ContainerFormPagamento>
          </>
        )}
      </Sidebar>
    </CheckoutContainer>
  )
}

export default Checkout
