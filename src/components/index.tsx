import { Main } from "./style";

//Hooks
import { useEffect, useState } from "react";

export default function ContadorCaracteres() {

    const [ content, setContent ] = useState<string>("");
    const [ character, setCharacter ] = useState<number>(0);
    const [ words, setWords ] = useState<number>(0);

    const counters = () => {
        const word = content.split(" ");

        setCharacter(content.length);
        setWords(word.length);
    }

    useEffect(() => {
        if(content.length > 0) {
            counters();
        } else {
            setCharacter(0);
            setWords(0);
        }
    }, [content])

    return (
        <Main>
            <section>
                <header>
                    <h1>Contador de Caracteres</h1>
                </header>
                <article>
                    <textarea placeholder="Digite aqui"
                    id="textarea"
                    onChange={(e) => setContent(e.target.value)} />
                </article>
                <footer>
                    <p>Caracteres: {character}</p>
                    <p>Palavras: {words}</p>
                    <p>Linhas: 92</p>
                </footer>
            </section>
        </Main>
    )
}