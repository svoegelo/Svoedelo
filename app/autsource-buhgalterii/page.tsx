import SeoHead from '@/components/SeoHead';
import { Shield, FileText, TrendingUp, Clock, Users } from 'lucide-react';

const benefits = [
  { icon: <Shield size={24} />, title: "Юридическая поддержка", desc: "Консультации по договорам и претензиям." },
  { icon: <TrendingUp size={24} />, title: "Налоговая оптимизация", desc: "Снижаем нагрузку легальными схемами." },
  { icon: <FileText size={24} />, title: "Сдача отчётности", desc: "В срок, без напоминаний и пени." },
  { icon: <Clock size={24} />, title: "Экономия времени", desc: "Вы занимаетесь бизнесом, а не бумагами." },
  { icon: <Users size={24} />, title: "Персональный менеджер", desc: "Один контакт на все вопросы." },
];

export default function AutsourcePage() {
  const title = 'Аутсорсинг бухгалтерских услуг для ИП и ООО | Свое Дело';
  const description = 'Полное бухгалтерское сопровождение бизнеса на аутсорсе. Фиксированная цена. Работаем по всей России.';

  return (
    <>
      <SeoHead title={title} description={description} />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3F] mb-6">
          Аутсорсинг бухгалтерских услуг для ИП и ООО
        </h1>
        <p className="mb-8 max-w-3xl">
          Передайте бухгалтерию профессионалам — получите спокойствие, точность и время на развитие бизнеса.
        </p>

        <h2 className="text-2xl font-semibold text-[#4A5D5E] mb-6">
          Что входит в бухгалтерское сопровождение бизнеса
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[#D2DBC8] p-6 rounded-xl">
              <div className="text-[#4A5D5E] mb-4">{b.icon}</div>
              <h3 className="font-bold text-[#4A5D5E] mb-2">{b.title}</h3>
              <p className="text-[#5A6B6C]">{b.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-medium text-[#2C3E3F] mb-3">Сдача отчетности без штрафов</h3>
        <p className="mb-4">Все отчёты проверяются дважды и сдаются за 3–5 дней до дедлайна.</p>

        <h3 className="text-xl font-medium text-[#2C3E3F] mb-3">Расчет налогов и заработной платы</h3>
        <p className="mb-4">Точные расчёты с учётом последних изменений в НК РФ.</p>

        <h3 className="text-xl font-medium text-[#2C3E3F] mb-6">Кадровый учет и консультации</h3>
        <p className="mb-8">От приёма до увольнения — всё в рамках закона.</p>

        <div className="text-center">
          <a href="/#contact-form" className="bg-[#4A5D5E] text-[#F8F8EC] font-bold py-3 px-8 rounded-lg hover:bg-[#3a4a4b] transition">
            Подключить аутсорсинг
          </a>
        </div>
      </main>
    </>
  );
}