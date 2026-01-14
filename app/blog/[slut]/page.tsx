import { blogPosts } from '../data';
import { notFound } from 'next/navigation';
import SeoHead from '@/components/SeoHead';
import Image from 'next/image';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <SeoHead
        title={`${post.title} | Свое Дело`}
        description={post.excerpt}
      />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3F] mb-4">{post.title}</h1>
          <time className="text-[#5A6B6C]">{post.date}</time>
        </header>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={420}
          className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
        />
        <div className="prose prose-lg max-w-none text-[#2C3E3F]">
          {/* Здесь можно добавить markdown или rich text */}
          <p>Это пример статьи. В реальном проекте контент загружается из CMS или Markdown-файлов.</p>
          <p>Статья содержит полезную информацию для предпринимателей, соответствует SEO-требованиям и помогает ранжироваться по целевым запросам.</p>
        </div>
      </article>
    </>
  );
}