import { getOrganizationSchema } from '@/lib/schema';
import SeoHead from '@/components/SeoHead';
import LeadForm from '@/components/LeadForm';
import { companyInfo } from '@/lib/companyData';
import { Users, TrendingUp, FileText, Shield, Clock, Check } from 'lucide-react';

const caCards = [
  { icon: <Users size={24} />, title: "ИП на УСН", desc: "Ведёте дела в одиночку и устали от отчётности." },
  { icon: <TrendingUp size={24} />, title: "Стартап до 10 человек", desc: "Растёте быстро, но бухгалтерия тормозит." },
  { icon: <FileText size={24} />, title: "ООО на ОСНО", desc: "Сложная отчётность и много нюансов." },
  { icon: <Shield size={24} />, title: "Бизнес с НДС", desc: "Нужна чёткая работа с вычетами и счетами." },
  { icon: <Clock size={24} />, title: "Сезонный бизнес", desc: "Нагрузка неравномерная — нужна гибкость." },
];

const fears = [
  { fear: "Боюсь штрафов за ошибки в отчётах", solution: "Работаем по чек-листам и двойной проверке. Ошибки исключены." },
  { fear: "Не хочу зависеть от одного бухгалтера", solution: "У вас — команда: главбух, юрист, налоговый консультант." },
  { fear: "Цена может вырасти внезапно", solution: "Фиксированная подписка. Никаких скрытых платежей." },
  { fear: "Потеряю контроль над финансами", solution: "Доступ к личному кабинету 24/7. Все данные — у вас." },
];

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Свое Дело — аутсорсинг бухгалтерии для ИП и ООО"
        description="Профессиональное ведение бухгалтерии от 3 000 ₽/мес. Без штрафов, ошибок и нервов. Работаем по всей России."
        schema={getOrganizationSchema()}
      />

      {/* Hero */}
      <section className="bg-[#4A5D5E] text-[#F8F8EC] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#D2DBC8] mb-2">Челябинск и вся Россия</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Аутсорсинг бухгалтерии для ИП и ООО<br />
              <span className="brush text-3xl md:text-4xl">Без ошибок, штрафов и нервов</span>
            </h1>
            <p className="text-[#D2DBC8] mb-6 max-w-lg">
              Профессиональное ведение бухгалтерии от 3 000 ₽/мес. Фиксированная цена, никаких скрытых платежей.
            </p>
            <div className="brush text-3xl mb-6">от 3 000 ₽</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="bg-[#F8F8EC] text-[#4A5D5E] font-bold py-3 px-8 rounded-lg hover:bg-[#e0e0d0] transition text-center">
                Рассчитать стоимость
              </a>
              <a href="/autsource-buhgalterii" className="text-[#D2DBC8] hover:underline text-center sm:text-left pt-2 sm:pt-0">
                Подробнее об услугах
              </a>
            </div>
          </div>
          <div className="bg-[#D2DBC8] bg-opacity-20 rounded-xl h-80 flex items-center justify-center text-[#F8F8EC]">
            <div className="text-6xl">📊</div>
          </div>
        </div>
      </section>

      {/* ЦА */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E3F] text-center mb-12">Этот сервис для вас, если вы:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {caCards.map((card, i) => (
              <div key={i} className="bg-[#D2DBC8] p-6 rounded-xl hover:bg-[#F8F8EC] transition cursor-pointer">
                <div className="text-[#4A5D5E] mb-4">{card.icon}</div>
                <h3 className="font-bold text-[#4A5D5E] mb-2">{card.title}</h3>
                <p className="text-[#5A6B6C]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Страхи */}
      <section className="py-16 px-6 bg-[#D2DBC8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E3F] text-center mb-12">Мы снимаем ваши страхи</h2>
          <div className="space-y-8">
            {fears.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <p className="text-[#5A6B6C] italic">«{item.fear}»</p>
                </div>
                <div className="md:w-1/2 flex items-start gap-4">
                  <Check className="text-[#4A5D5E] mt-1 flex-shrink-0" size={20} />
                  <p className="text-[#2C3E3F]">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контактная форма — ОБНОВЛЕНО */}
      <section id="contact-form" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="brush text-5xl text-[#4A5D5E] mb-6">от 3 000 ₽ / мес</div>
          <p className="text-[#5A6B6C] mb-8 max-w-2xl mx-auto">
            Точная стоимость зависит от вида деятельности, числа сотрудников и объёма операций. Рассчитаем бесплатно!
          </p>
          <LeadForm />
        </div>
      </section>

      {/* Footer CTA — с реальным номером */}
      <section className="py-16 px-6 bg-[#4A5D5E] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F8F8EC] mb-4">Готовы освободить время для бизнеса?</h2>
          <p className="text-[#D2DBC8] mb-8">Оставьте заявку — рассчитаем стоимость и ответим на вопросы</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneFormatted}`}
              className="bg-[#F8F8EC] text-[#4A5D5E] font-bold py-3 px-8 rounded-lg hover:bg-[#e0e0d0] transition"
            >
              Позвонить
            </a>
            <a
              href={`tg://resolve?domain=${companyInfo.telegram.replace('@', '')}`}
              className="border border-[#F8F8EC] text-[#F8F8EC] font-bold py-3 px-8 rounded-lg hover:bg-[#F8F8EC] hover:text-[#4A5D5E] transition"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}