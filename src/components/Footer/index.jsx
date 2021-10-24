import Link from 'next/link'
import React, { Button } from 'react';

import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import Iframe from 'react-iframe'

import styles from './styles.module.css'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.row}>
                {/* Coluna 1 */}
                <div className={styles.col}>
                    <h3>Contatos</h3>
                    <ul className={styles.listContact}>
                        <li>
                            <i className={styles.icon}>
                                <FaWhatsapp />
                            </i>
                            + 55 11 9 8839 8389
                        </li>
                        <li>
                            <i className={styles.icon}>
                                <FaTelegramPlane />
                            </i>
                            + 55 11 9 8839 8389
                        </li>
                        <li>
                            <i className={styles.icon}>
                                <FaRegEnvelope />
                            </i>
                            aguiasdobosquefc@gmail.com
                        </li>
                        <li className={styles.socialsIcon}>
                            <i>
                                <Link href="https://web.facebook.com/aguiasdobosque">
                                    <a target="_blank"><FaFacebook /></a>
                                </Link>
                            </i>
                            <i>
                                <Link href="https://www.instagram.com/aguiasdobosque/">
                                    <a target="_blank"><FaInstagram /></a>
                                </Link>
                            </i>
                            <i>
                                {/* <Button
                                    className='myWonderfulButton'
                                    onClick={
                                        () => {
                                            navigator.share({
                                                title: 'Share',
                                                text: 'whatevs',
                                                url: this.state.link
                                            }
                                            )
                                        }
                                    }>
                                    Compartilhar
                                </Button> */}
                                <FaShareAlt />
                            </i>
                        </li>
                    </ul>
                </div>
                {/* Coluna 2 */}
                <div className={styles.col}>

                </div>
                {/* Coluna 3 */}
                <div className={styles.col}>
                    <h3>Localização</h3>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.977134261554!2d-46.583103685021335!3d-23.605152984661185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c6269d21fc5%3A0x139902f84484cd59!2sCDC%20UCRA%20-%20Uni%C3%A3o%20Cultural%20e%20Recreativa%20Amizade!5e0!3m2!1spt-BR!2sbr!4v1633910073338!5m2!1spt-BR!2sbr"
                        width="400"
                        height="200"
                        id="localization"
                        className="localization"
                        display="initial"
                        position="relative" />
                </div>
            </div>
            <hr className={styles.hr}></hr>
            <div className={styles.copyrigth}>
                <p>
                    &copy;{new Date().getFullYear()} Gabriel Mariusso | All right reserved | Terms Of Service | Privacy
                </p>
            </div>
        </footer>
    );
}