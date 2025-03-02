"use client";

import React from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
// import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
// import ScrollProgressBar from "../components/ScrollProgressBar";
import HeroText from "../components/HeroText";
import FixedBackground from "../components/FixedBackground";

export default function Page() {
  // const isSmall = useMediaQuery({ maxWidth: 520 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="max-w-screen relative mx-auto flex min-h-dvh flex-col items-center justify-center overflow-hidden">
      <FixedBackground />

      {/* {isMobile && <ScrollProgressBar />} */}
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}
      {/* <ScrollToTopButton /> */}

      <section className="container flex min-h-screen flex-col items-center justify-center p-6">
        <HeroText heading="Imprint" />
      </section>

      <section className="container flex flex-col gap-2 px-4 pb-32 md:px-20">
        <p>
          <b>Medieninhaber und verantwortlich für den Inhalt:</b> Mathias Ebner
        </p>
        <p>
          <b>Adresse: </b>Hauptstraße 28, 3270 Scheibbs, Österreich
        </p>
        <p>
          <b>E-Mail: </b>
          <a href="mailto: mathiasebner2000@gmail.com">
            mathiasebner2000@gmail.com
          </a>
        </p>
        <p>
          <b>Hinweis: </b>Diese Website dient rein privaten Zwecken und verfolgt
          keine kommerziellen Interessen. Alle gezeigten Projekte, Fotos,
          Designs und Bloginhalte wurden ausschließlich privat erstellt und
          stehen nicht im Zusammenhang mit Drittparteien.
        </p>
        <p>
          <b>Haftungsausschluss: </b>Die Inhalte dieser Website wurden mit
          größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
          und Aktualität der Inhalte wird jedoch keine Haftung übernommen.
        </p>
        <p>
          <b>Hinweis zu verwendeten Medien: </b>Diese Website verwendet Medien
          die unter der Content License von Pixabay stehen. Die Inhalte wurden
          gemäß den Lizenzbestimmungen verwendet, angepasst oder in neue
          kreative Werke eingebunden.
        </p>
        <p>
          <b>Hinweis zu Fotos: </b>Die auf dieser Website veröffentlichten
          Streetfotografie-Bilder dienen rein künstlerischen und
          dokumentarischen Zwecken. Es wurde darauf geachtet, dass keine
          berechtigten Interessen der abgebildeten Personen verletzt werden.
          Sollten Sie sich auf einem der Bilder wiedererkennen und mit der
          Veröffentlichung nicht einverstanden sein, kontaktieren Sie mich bitte
          und ich werde das betreffende Bild umgehend entfernen.
        </p>
      </section>
      <Footer />
    </main>
  );
}
