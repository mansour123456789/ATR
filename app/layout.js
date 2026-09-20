import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/bootstrap.css"
import "../public/assets/css/color.css"
import "../public/assets/css/style.css"
import "../public/assets/css/responsive.css"
import "../public/assets/css/modern-override.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { oswald,inter, poppins,playfair_display, rubik } from '@/lib/font'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata = {
    title: 'ATR - Association Tunisienne des Routes',
    description: 'Site officiel de l\'Association Tunisienne des Routes (ATR).',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${inter.variable} ${oswald.variable} ${playfair_display.variable} ${poppins.variable} ${rubik.variable}`}>
            <body>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}
