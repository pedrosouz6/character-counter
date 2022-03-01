import { Main } from "./style";

export default function ContadorCaracteres() {

    return (
        <Main>
            <section>
                <header>
                    <h1>Contador de Caracteres</h1>
                </header>
                <article>
                    <textarea placeholder="Digite aqui" />
                </article>
                <footer>
                    <p>Caracteres: 100</p>
                    <p>Palavras: 21</p>
                    <p>Linhas: 2</p>
                </footer>
            </section>
        </Main>
    )
}