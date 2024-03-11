import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'SEO Pricing',
  keywords: ['Pricing', 'Allan'],
};

export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>Pricing page</span>
    </>
  );
}
