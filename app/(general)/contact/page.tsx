import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'SEO Contact',
  keywords: ['Contact', 'Allan'],
};

export default function ContactPage() {
  return (
    <>
      <span className='text-7xl'>Contact page</span>
    </>
  );
}
