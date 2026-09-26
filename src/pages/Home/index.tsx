import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro />
    <ListaContatos />
    <BotaoAdicionar />
  </>
)

export default Home
