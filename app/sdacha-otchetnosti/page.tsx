import SeoHead from '@/components/SeoHead';

export default function SdachaOtchetnostiPage() {
  const title = 'Разовая сдача отчётности | Свое Дело';
  const description = 'Сдадим отчётность за квартал, год или за прошлые периоды. Быстро, точно, без штрафов.';

  return (
    <>
      <SeoHead title={title} description={description} />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3F] mb-6">
          Разовая сдача отчётности — когда нужен профессионал «здесь и сейчас»
        </h1>
        <p className="mb-6">
          Устали от бухгалтера? Перешли на самозанятость, но нужно закрыть ИП? 
          Или просто не успеваете сдать отчётность в срок? 
          Мы подготовим и сдадим любую отчётность — даже за прошлые годы.
        </p>

        <h2 className="text-2xl font-semibold text-[#4A5D5E] mt-10 mb-4">
          Какие отчёты можем сдать?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Декларации по УСН, ОСНО, ЕНВД, ПСН</li>
          <li>Отчёты в ПФР и ФСС (СЗВ-М, СЗВ-ТД, РСВ, 4-ФСС)</li>
          <li>6-НДФЛ и 2-НДФЛ</li>
          <li>НДС (разделы 1–12)</li>
          <li>Бухгалтерскую отчётность (для ООО)</li>
          <li>Ликвидационную отчётность при закрытии ИП/ООО</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#4A5D5E] mt-10 mb-4">
          Преимущества разовой сдачи у нас:
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Сдача за 1–3 дня (срочные случаи)</li>
          <li>Проверка через 2 уровня контроля</li>
          <li>Гарантия отсутствия штрафов</li>
          <li>Цена фиксируется до начала работы</li>
        </ul>

        <div className="bg-[#D2DBC8] p-6 rounded-xl">
          <p className="font-bold">Стоимость от 2 500 ₽ за декларацию.</p>
          <a href="/#contact-form" className="mt-4 inline-block bg-[#4A5D5E] text-[#F8F8EC] px-6 py-2 rounded hover:bg-[#3a4a4b]">
            Отправить документы
          </a>
        </div>
      </main>
    </>
  );
}