import { Phone, Mail, MapPin } from 'lucide-react';
import SeoHead from '@/components/SeoHead';

export default function ContactsPage() {
  return (
    <>
      <SeoHead
        title="Контакты | Свое Дело — аутсорсинг бухгалтерии"
        description="Свяжитесь с нами: телефон, email, Telegram. Работаем дистанционно по всей России."
      />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#2C3E3F] mb-8">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Связаться с нами</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-[#4A5D5E] mt-1" size={20} />
                <span><a href="tel:+79001234567" className="hover:underline">+7 (922) 712-22-66</a></span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#4A5D5E] mt-1" size={20} />
                <span><a href="mailto:gb-buh74@bk.ru" className="hover:underline">gb-buh74@bk.ru</a></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#4A5D5E] mt-1" size={20} />
                <span>Челябинск, Россия<br />Работаем дистанционно по всей РФ</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Написать в Telegram</h2>
            <a
              href="tg://resolve?domain=shoedelo_bot"
              className="inline-flex items-center gap-2 bg-[#4A5D5E] text-[#F8F8EC] px-6 py-3 rounded-lg hover:bg-[#3a4a4b]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.9 8.3c.2.1.2.3 0 .5L15.4 11l2.5 7.3c0 .2-.1.3-.2.3-.1.1-.2.1-.3 0l-4.3-2.8-2 2c-.1.1-.2.1-.3 0-.1-.1-.1-.2 0-.3L12.5 12l-4.3-4.3c-.1-.1-.1-.2 0-.3.1-.1.2-.1.3 0l7.3 4.3 2.5-2.5c.1-.1.3-.1.5 0z"/>
              </svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </main>
    </>
  );
}