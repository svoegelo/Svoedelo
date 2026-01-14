import { Alegreya_Sans as AlegreyaSans } from 'next/font/google';
import localFont from 'next/font/local';

export const alegreyaSans = AlegreyaSans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-alegreya-sans',
});

export const comforterBrush = localFont({
  src: '../../public/fonts/comforter-brush.woff2',
  display: 'swap',
  variable: '--font-comforter-brush',
});