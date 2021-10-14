import Link from 'next/link'

import styles from './styles.module.css'

export default function Header(props) {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <img src="/Mascote.png" alt="AguiasDoBosque" width={120} height={120} />
            </header>

            <navbar className={styles.navbar}>
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

            <div className={styles.title}>
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}