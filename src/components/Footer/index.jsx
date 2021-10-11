import styles from './styles.module.css'
import Iframe from 'react-iframe'

export default function Header() {
    return (
        <footer className={styles.footerContainer}>
            <h1>Contatos</h1>
            <p>+ 55 11 9 8839 8389</p>
            <p>+ 55 11 9 8839 8389</p>
            <p>aguiasdobosquefc@gmail.com</p>

            <h1>Localizacao</h1>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.977134261554!2d-46.583103685021335!3d-23.605152984661185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c6269d21fc5%3A0x139902f84484cd59!2sCDC%20UCRA%20-%20Uni%C3%A3o%20Cultural%20e%20Recreativa%20Amizade!5e0!3m2!1spt-BR!2sbr!4v1633910073338!5m2!1spt-BR!2sbr"
                width="300"
                height="150"
                id="localization"
                className="localization"
                display="initial"
                position="relative" />
        </footer>
    );
}