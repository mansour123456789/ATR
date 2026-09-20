import { Inter,Oswald,Playfair_Display,Poppins,Rubik } from 'next/font/google'

export const inter =Inter({
    weight: ['400', '500',],
    subsets: ['latin'],
    variable: "--inter",
    display: 'swap',
})
export const oswald = Oswald({
    weight: ['400', '500','600', '700'],
    subsets: ['latin'],
    variable: "--oswald",
    display: 'swap',
})

export const playfair_display = Playfair_Display({
    weight: ['400','600'],
    subsets: ['latin'],
    variable: "--playfair_display",
    display: 'swap',
})
export const poppins = Poppins({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    variable: "--poppins",
    display: 'swap',
})
export const rubik = Rubik({
    weight: ['400','600'],
    subsets: ['latin'],
    variable: "--rubik",
    display: 'swap',
})
