import { alegreyaSans, comforterBrush } from '@/lib/fonts';
import './globals.css';
import type { Metadata } from 'next';

export const meta Metadata = {
  title: {
    default: 'Свое Дело — аутсорсинг бухгалтерии для ИП и ООО',
    template: '%s | Свое Дело',
  },
  description: 'Профессиональное ведение бухгалтерии от 3 000 ₽/мес. Без штрафов, ошибок и нервов. Работаем по всей России.',
  keywords: 'бухгалтерия на аутсорсе, бухгалтер для ИП, бухгалтер для ООО, сдача отчетности, Челябинск',
  authors: [{ name: 'Свое Дело' }],
  openGraph: {
    title: 'Свое Дело — бухгалтерия на аутсорсе',
    description: 'Надёжное ведение учёта для малого бизнеса. Фиксированная цена. Без скрытых платежей.',
    url: 'https://svoedelo.ru',
    siteName: 'Свое Дело',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${alegreyaSans.variable} ${comforterBrush.variable} font-sans antialiased bg-white text-[#2C3E3F]`}>
        {children}
      </body>
    </html>
  );
}