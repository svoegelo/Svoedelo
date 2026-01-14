import { blogPosts } from './data';
import Link from 'next/link';
import Image from 'next/image';
import SeoHead from '@/components/SeoHead';

export default function BlogPage() {
  return (
    <>
      <SeoHead
        title="Блог | Свое Дело — советы по бухгалтерии и налогам"
        description="Полезные статьи для ИП и ООО: изменения в законодательстве, лайфхаки, разбор ошибок."
      />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#2C3E3F] text-center mb-12">Полезные материалы</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.slug} className="border rounded-xl overflow-hidden hover:shadow-md transition">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={315}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-[#5A6B6C] text-sm">{post.date}</time>
                <h2 className="font-bold text-[#2C3E3F] text-xl mb-3 mt-2">{post.title}</h2>
                <p className="text-[#5A6B6C] mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-[#4A5D5E] font-medium hover:underline">
                  Читать статью
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}