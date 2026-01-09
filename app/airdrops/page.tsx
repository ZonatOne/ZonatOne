'use client';

import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { AirdropCard } from '@/components/AirdropCard';
import { useState } from 'react';

// Extended Mock Data
const ALL_AIRDROPS = [
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
    },
    {
        id: '4',
        name: 'Scroll',
        value: 'Potential High',
        description: 'Native zkEVM Layer 2 for Ethereum. Mainnet is live, ecosystem exploring advised.',
        status: 'active' as const,
        platform: 'Scroll',
        tasks: ['Bridge', 'Deploy Contract'],
        link: '#'
    },
    {
        id: '5',
        name: 'LayerZero',
        value: 'Confirmed',
        description: 'Omnichain interoperability protocol. Interacting with Stargate and other dApps.',
        status: 'active' as const,
        platform: 'LayerZero',
        tasks: ['Bridge', 'Vote'],
        link: '#'
    },
    {
        id: '6',
        name: 'Venom',
        value: 'Testnet',
        description: 'Scalable blockchain. Complete testnet tasks to earn NFT badges.',
        status: 'ended' as const,
        platform: 'Venom',
        tasks: ['Testnet Tasks', 'Collect NFTs'],
        link: '#'
    }
];

export default function AirdropsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAirdrops = ALL_AIRDROPS.filter(airdrop =>
        airdrop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airdrop.platform.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">All Airdrops</h1>
                <p className="text-gray-400 mb-8">Browse the complete list of potential airdrop opportunities.</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name or platform..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-secondary/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-secondary/50 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                        <Filter size={20} />
                        Filters
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAirdrops.map((airdrop, index) => (
                    <AirdropCard key={airdrop.id} airdrop={airdrop} index={index} />
                ))}
            </div>

            {filteredAirdrops.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No airdrops found matching your search.
                </div>
            )}
        </div>
    );
}
