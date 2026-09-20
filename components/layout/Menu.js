'use client'
import Link from "next/link";

export default function Menu() {
    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Accueil</Link></li>
                <li className="dropdown"><Link href="/about-us">Découvrir l'ATR</Link>
                    <ul>
                        <li><Link href="/about-us">Qui sommes-nous ?</Link></li>
                        <li><Link href="/domaines">Notre Organisation</Link></li>
                        <li><Link href="/team">Nos Membres</Link></li>
                    </ul>
                </li>

                <li className="dropdown"><Link href="#">Nos Activités</Link>
                    <ul>

                        <li className="dropdown"><Link href="/events">Événements & Séminaires</Link>

                        </li>
                        <li ><Link href="/publications">Publications & Rapports</Link></li>
                        <li><Link href="/pourquoi-atr">Formation & Académie</Link></li>

                    </ul>
                </li>
                <li className="dropdown"><Link href="/events/seminaire-piarc-2026">Actualités & Agenda</Link>
                    <ul>
                        <li><Link href="/publications">Actualités</Link></li>
                        <li><Link href="/calendrier">Agenda</Link></li>
                        <li><Link href="/publications">Communiqués</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contacter</Link></li>
            </ul>
        </>
    )
}
