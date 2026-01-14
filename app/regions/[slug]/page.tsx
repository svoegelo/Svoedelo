import { regions } from '../data';
import { getRegionSchema } from '@/lib/schema';
import SeoHead from '@/components/SeoHead';
import Link from 'next/link';

export async function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = regions.find(r => r.slug === params.slug);
  if (!region) {
    return (
      <div className="p-12 text-center">
        <h1>Регион не найден</h1>
        <Link href="/" className="text-[#4A5D5E] underline">Вернуться на главную</Link>
      </div>
    );
  }

  const title = `Бухгалтерия на аутсорсе в ${region.name} | Свое Дело`;
  const description = `Профессиональное ведение бухгалтерии для ИП и ООО в ${region.name}. От 3 000 ₽/мес. Без штрафов.`;

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        schema={getRegionSchema(region)}
      />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3F] mb-6">{region.h1}</h1>
        <h2 className="text-2xl font-semibold text-[#4A5D5E] mb-4">Бухгалтерские услуги для бизнеса в {region.name}</h2>
        <p className="mb-6">
          Компания «Свое Дело» оказывает услуги аутсорсинга бухгалтерии предпринимателям и организациям в {region.name} и области.
          Мы работаем дистанционно, но учитываем все особенности регионального законодательства и налоговой практики.
        </p>

        <h3 className="text-xl font-medium text-[#2C3E3F] mb-3">Сдача отчетности в ФНС {region.name}ской области</h3>
        <p className="mb-8">
          Все отчёты подаются вовремя через оператора ЭДО. Мы контролируем сроки, проверяем данные дважды и гарантируем отсутствие штрафов.
        </p>

        <div className="bg-[#D2DBC8] p-6 rounded-xl">
          <p className="font-bold">Готовы начать? Оставьте заявку — рассчитаем стоимость за 10 минут.</p>
          <a href="/#contact-form" className="mt-4 inline-block bg-[#4A5D5E] text-[#F8F8EC] px-6 py-2 rounded hover:bg-[#3a4a4b]">
            Рассчитать стоимость
          </a>
        </div>
      </main>
    </>
  );
}