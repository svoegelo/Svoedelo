import SeoHead from '@/components/SeoHead';

export default function VosstanovlenieUchetaPage() {
  const title = 'Восстановление бухгалтерского учета | Свое Дело';
  const description = 'Восстановим учёт за любой период — даже если вы не сдавали отчётность годами. Без штрафов, с гарантией.';

  return (
    <>
      <SeoHead title={title} description={description} />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3F] mb-6">
          Восстановление бухгалтерского учета — выход из сложной ситуации
        </h1>
        <p className="mb-6">
          Пропустили сроки сдачи отчётности? Нет первички? До вас вёл учёт «бухгалтер-самоучка»? 
          Не паникуйте — мы восстановим учёт за любой период: от 1 месяца до 5 лет.
        </p>

        <h2 className="text-2xl font-semibold text-[#4A5D5E] mt-10 mb-4">
          Что входит в восстановление учёта?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Анализ имеющихся документов и данных</li>
          <li>Восстановление первичной документации (акты, счёта, платёжки)</li>
          <li>Формирование регистров бухгалтерского и налогового учёта</li>
          <li>Подготовка и сдача всех просроченных отчётов в ФНС, ПФР, ФСС</li>
          <li>Расчёт недоимок, пеней и штрафов (если есть)</li>
          <li>Передача дела новому бухгалтеру или переход на аутсорсинг</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#4A5D5E] mt-10 mb-4">
          Почему это работает?
        </h2>
        <p className="mb-4">
          Мы работаем по методике, одобренной налоговыми органами. Даже при полном отсутствии документов 
          мы можем восстановить учёт на основе выписок из банка и кассовых отчётов.
        </p>
        <p className="mb-8">
          Главный бухгалтер с 15-летним стажем лично курирует каждый случай.
        </p>

        <div className="bg-[#D2DBC8] p-6 rounded-xl">
          <p className="font-bold">Стоимость от 10 000 ₽ — зависит от периода и объёма.</p>
          <a href="/#contact-form" className="mt-4 inline-block bg-[#4A5D5E] text-[#F8F8EC] px-6 py-2 rounded hover:bg-[#3a4a4b]">
            Заказать восстановление
          </a>
        </div>
      </main>
    </>
  );
}