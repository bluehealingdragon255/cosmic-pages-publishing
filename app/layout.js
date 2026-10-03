import './globals.css';

export const metadata = {
  title: 'Luma Press | Cosmic Book Publishing',
  description: 'A celestial publishing house for remarkable stories, voices, and worlds.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
