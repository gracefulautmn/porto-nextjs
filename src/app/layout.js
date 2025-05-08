import '../styles/globals.css';

export const metadata = {
  title: 'Code with Nizar',
  description: 'Portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}