import Card from './Card'
import Batman from '../Imagens/Batman.jpg'
import Coringa from '../Imagens/Coringa.jpg'
import Bane from '../Imagens/Bane.jpg'
import Mulher_Gato from '../Imagens/Mulher_Gato.jpg'
import Post_Batman from '../Imagens/Post_Batman.jpg'
import Post_Coringa from '../Imagens/Post_Coringa.jpg'
import Post_Bane from '../Imagens/Post_Bane.jpg'
import Post_Mulher_Gato from '../Imagens/Post_Mulher_Gato.jpg'

function Feed() {
    return (
        <div>
            <Card
                nome="Batman"
                foto={Batman}
                poster={Post_Batman}
                curtido="Robin"
                destaque="Coringa"
                comentario="Não leve a via a sério, você nãi vai sair vivo dela."
            />

            <Card
                nome="Coringa"
                foto={Coringa}
                poster={Post_Coringa}
                curtido="Pinguim"
                destaque="Batman"
                comentario="Eu sou a vingança. Eu sou a noite. Eu sou o Batman."
            />

            <Card
                nome="Bane"
                foto={Bane}
                poster={Post_Bane}
                curtido="Talia"
                destaque="Talia Al Ghul"
                comentario="Um justiceiro é um homem perdido que age visando benefícios próprios, ele pode ser destruído e até preso..."
            />

            <Card
                nome="Mulher Gato"
                foto={Mulher_Gato}
                poster={Post_Mulher_Gato}
                curtido="Bruce.Wayne"
                destaque="Batman"
                comentario="Sem armas, sem mortes."
            />
        </div>
    )
}

export default Feed