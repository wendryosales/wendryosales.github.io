import React from 'react';
import {
  FaLinkedin, FaInstagram, FaGithub, FaWhatsapp,
} from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import Header from '../components/Header';
import style from './Contact.module.css';

function Contact() {
  return (
    <main className={style.container}>
      <Header />
      <section className={style.wrapper}>
        <article className={style.Contact}>
          <div className={style.contactAdress}>
            <p>
              <span>
                <MdOutlineEmail />
              </span>
              wendryo.sales@gmail.com
            </p>
            <p>
              <span>
                <BsTelephone />
              </span>
              (27) 99995-4899
            </p>
            <p>
              <span>
                <MdOutlineLocationOn />
              </span>
              Vila Velha - ES, Brasil
            </p>
          </div>
          <div className={style.maps}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14961.890332659577!2d-40.31121828503991!3d-20.363395780728094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb815fbdc568f9d%3A0xf94c7e9139a97fd5!2sCoqueiral%20de%20Itaparica%2C%20Vila%20Velha%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1650582308531!5m2!1spt-BR!2sbr"
              title="maps"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>
        <section className={style.footer}>
          <p>
            2022 © Wendryo. Alguns direitos reservados.
          </p>
          <div className={style.icons}>
            <abbr title="LinkedIn">
              <a
                href="https://www.linkedin.com/in/wendryosales/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </abbr>
            <abbr title="Instagram">
              <a
                href="https://www.instagram.com/wendryo_sales/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />

              </a>
            </abbr>
            <abbr title="GitHub">
              <a
                href="https://github.com/wendryosales"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />

              </a>
            </abbr>
            <abbr title="WhatsApp">
              <a
                href="https://wa.me/+5527999954899"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />

              </a>
            </abbr>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Contact;
