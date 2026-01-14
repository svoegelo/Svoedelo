// app/components/SeoHead.tsx
'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function SeoHead({
  title,
  description,
  schema,
}: {
  title?: string;
  description?: string;
  schema?: Record<string, any>;
}) {
  const pathname = usePathname();
  const canonical = `https://svoedelo.ru${pathname}`; // ← УБРАНЫ ПРОБЕЛЫ!

  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {schema && (
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>
      )}
    </>
  );
}
