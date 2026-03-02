import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProductSlugs } from '@/lib/content';
import { ProductPageClient } from './ProductPageClient';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.title,
    description: product.problem.split('.')[0],
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
