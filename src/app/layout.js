import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans', 
});

export const metadata = {
  title: 'Nizar Afham | Portfolio',
  description: 'Portfolio website for Nizar Afham, a Full-Stack and Mobile Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}