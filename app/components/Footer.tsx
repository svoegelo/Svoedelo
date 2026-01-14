import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4A5D5E] text-[#D2DBC8] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/images/logo.svg"
            alt="Свое Дело — аутсорсинг бухгалтерии"
            width={180}
            height={40}
            priority
          />
          <p className="mt-2">Аутсорсинг бухгалтерии для малого бизнеса</p>
        </div>
        {/* остальные колонки */}
      </div>
    </footer>
  );
}