import SeoHead from '@/components/SeoHead';

export default function IpPage() {
  const title = 'Бухгалтерия для ИП на аутсорсе | Свое Дело';
  const description = 'Ведение бухгалтерии для индивидуальных предпринимателей от 3 000 ₽/мес. УСН, ПСН, ОСНО, самозанятость. Без штрафов.';

  return (
    <>
      <SeoHead title={title} description={description} />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3F] mb-6">
          Аутсорсинг бухгалтерии для ИП — просто, надёжно, выгодно
        </h1>
        <p className="mb-6">
          Вы — ИП, но не бухгалтер. Каждый квартал вы тратите часы на отчётность, боитесь ошибок и пени.
          Мы берём бухгалтерию на себя — вы занимаетесь бизнесом.
        </p>

        <h2 className="text-2xl font-semibold text-[#4A5D5E] mt-10 mb-4">
          Что входит в обслуживание ИП?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Ведение учёта по УСН, ПСН, ОСНО</li>
          <li>Сдача деклараций и отчётов в ФНС, ПФР, ФСС</li>
          <li>Расчёт налогов и страховых взносов</li>
          <li>Подготовка платёжных поручений</li>
          <li>Консультации по налогам и режимам</li>
          <li>Помощь при переходе на самозанятость</li>
        </ul>

        <div className="bg-[#D2DBC8] p-6 rounded-xl">
          <p className="font-bold">Стоимость от 3 000 ₽/мес — фиксированная, без скрытых платежей.</p>
          <a href="/#contact-form" className="mt-4 inline-block bg-[#4A5D5E] text-[#F8F8EC] px-6 py-2 rounded hover:bg-[#3a4a4b]">
            Рассчитать для моего ИП
          </a>
        </div>
      </main>
    </>
  );
}