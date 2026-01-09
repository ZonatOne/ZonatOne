'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Plus, Rocket, ExternalLink } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white font-sans uppercase">
                Temukan Airdrop <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Crypto Terbaik &</span> <br />
                Terpercaya
              </h1>

              <p className="text-base text-gray-400 mb-10 max-w-lg leading-relaxed">
                Dapatkan informasi airdrop cryptocurrency terbaru setiap hari. Update 24/7, terverifikasi, dan 100% gratis!
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/airdrops"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold tracking-wide hover:shadow-[0_0_20px_-5px_#3b82f6] transition-all duration-300 flex items-center gap-2 group"
                >
                  <Rocket size={20} className="group-hover:-translate-y-1 transition-transform" />
                  JELAJAHI AIRDROP
                </Link>
                <Link
                  href="/campaign"
                  className="px-8 py-4 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 text-white font-bold tracking-wide transition-all duration-300 flex items-center gap-2"
                >
                  <Plus size={20} />
                  SUBMIT AIRDROP
                </Link>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TOTAL AIRDROP', value: '12', color: 'border-blue-500/50' },
                  { label: 'AKTIF', value: '12', color: 'border-blue-500/50' },
                  { label: 'TOTAL REWARD', value: '$34K+', color: 'border-blue-500/50' }
                ].map((stat, i) => (
                  <div key={i} className={`bg-[#0F111A] border-l-2 border-b-2 ${stat.color} p-4 rounded-xl relative overflow-hidden group hover:border-cyan-400 transition-colors`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-3xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">{stat.value}</h3>
                    <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Slider */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HotAirdropSlider />
            </motion.div>

          </div>
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
