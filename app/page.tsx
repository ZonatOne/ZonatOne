'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AirdropCard } from '@/components/AirdropCard';
import { HotAirdropSlider } from '@/components/HotAirdropSlider';

// Mock Data
const FEATURED_AIRDROPS = [
  {
    id: '1',
    name: 'Nebula Protocol',
    value: '$500 - $2000',
    description: 'Layer 2 scaling solution for DeFi. Early adopters reward program is now live.',
    status: 'active' as const,
    platform: 'Ethereum',
    tasks: ['Twitter Follow', 'Bridge Assets', 'Join Discord'],
    link: '#'
  },
  {
    id: '2',
    name: 'ZetaChain',
    value: 'Unknown',
    description: 'Omnichain smart contracts. Testnet participants eligible for rewards.',
    status: 'active' as const,
    platform: 'ZetaChain',
    tasks: ['Testnet Swap', 'Twitter Share'],
    link: '#'
  },
  {
    id: '3',
    name: 'Starknet',
    value: '$1000+',
    description: 'Validity Rollup. The token is confirmed. Interact to be eligible.',
    status: 'upcoming' as const,
    platform: 'Starknet',
    tasks: ['Bridge', 'Trade', 'Liquidity'],
    link: '#'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Minimalist Slider Only */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Slider Section - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <HotAirdropSlider />
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Opportunities</h2>
              <p className="text-gray-400">Hand-picked high value airdrops for you</p>
            </div>
            <Link href="/airdrops" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_AIRDROPS.map((airdrop, index) => (
              <AirdropCard key={airdrop.id} airdrop={airdrop} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
