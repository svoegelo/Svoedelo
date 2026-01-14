import SeoHead from '@/components/SeoHead';

export default function OooPage() {
  const title = 'Бухгалтерия для ООО на аутсорсе | Свое Дело';
  const description = 'Профессиональное ведение бухгалтерии для ООО: ОСНО, УСН, НДС. От 5 000 ₽/мес. Юридическая поддержка.';

  return (
    <>
      <SeoHead title={title} description={description} />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3F] mb-6">
          Аутсорсинг бухгалтерии для ООО — защита вашего бизнеса
        </h1>
        <p className="mb-6">
          ООО требует особого подхода: НДС, кадры, зарплата, отчётность в 3 фонда.
          Ошибки дорого стоят — штрафы, блокировки, проверки.
          Мы обеспечиваем полное сопровождение «под ключ».
        </p>

        <h2 className="text-2xl font-semibold text-[#4A5D5E] mt-10 mb-4">
          Что входит в обслуживание ООО?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Ведение бухгалтерского и налогового учёта</li>
          <li>Сдача отчётности по НДС, прибыли, 6-НДФЛ, РСВ и др.</li>
          <li>Расчёт зарплаты, больничных, отпускных</li>
          <li>Кадровый учёт: приказы, трудовые, увольнения</li>
          <li>Юридические консультации по договорам</li>
          <li>Подготовка первички и платёжек</li>
        </ul>

        <div className="bg-[#D2DBC8] p-6 rounded-xl">
          <p className="font-bold">Стоимость от 5 000 ₽/мес — зависит от объёма операций.</p>
          <a href="/#contact-form" className="mt-4 inline-block bg-[#4A5D5E] text-[#F8F8EC] px-6 py-2 rounded hover:bg-[#3a4a4b]">
            Рассчитать для моего ООО
          </a>
        </div>
      </main>
    </>
  );
}