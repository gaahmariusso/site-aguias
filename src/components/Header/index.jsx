import Link from 'next/link'

import styles from './styles.module.css'

export default function Header(props) {
    return (
        <div className={styles.headerContainer}>
            <header>
                <img src="/Mascote.jpg" alt="AguiasDoBosque" width={180} height={120} />

                <h4>{props.title}</h4>
            </header>

            <navbar>
                <Link href="/Home">
                    Home
                </Link>
                <Link href="/Perfil">
                    Perfil
                </Link>
                <Link href="/Sobre">
                    Sobre
                </Link>
                <Link href="/Jogos">
                    Jogos
                </Link>
                <Link href="/Quadros">
                    Quadros
                </Link>
                <Link href="/Calendario">
                    Calendário
                </Link>
            </navbar>
        </div>
    );
}