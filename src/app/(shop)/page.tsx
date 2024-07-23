import { CatalogSection } from '@/components/sections/CatalogSection/CatalogSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог футболок',
};

const Page = () => {
  return <CatalogSection />;
};

export default Page;
