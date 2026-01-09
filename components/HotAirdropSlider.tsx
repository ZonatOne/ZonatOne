'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Gem } from 'lucide-react';
import Link from 'next/link';

const HOT_AIRDROPS = [
    {
        id: 1,
        title: "$50 - 50 Days",
        subtitle: "Best airdrop Low Cost for brilliant achievement",
        name: "ZONATONE",
        platform: "Mode Network Airdrop",
        desc: "Mode adalah Layer 2 dengan focus DeFi. Early users berpotensi mendapat MODE token airdrop.",
        bg: "from-blue-600/20 to-purple-600/20",
        image: "linear-gradient(to right, #4f46e5, #9333ea)" // Placeholder for actual image
    },
    {
        id: 2,
        title: "Confirmed Reward",
        subtitle: "Interact and qualify for the drop",
        name: "SCROLL ZKP",
        platform: "Scroll Mainnet",
        desc: "The native zkEVM for Ethereum. Experience seamless scaling.",
        bg: "from-orange-600/20 to-red-600/20",
        image: "linear-gradient(to right, #ea580c, #dc2626)"
    }
];

export function HotAirdropSlider() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % HOT_AIRDROPS.length);
    const prev = () => setCurrent((prev) => (prev - 1 + HOT_AIRDROPS.length) % HOT_AIRDROPS.length);

    return (
        <div className="w-full bg-[#0F111A] border border-blue-900/30 rounded-3xl p-6 relative overflow-hidden group">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <Gem className="text-white" size={20} />
                    <span className="font-bold text-lg text-white">Star Kampanye</span>
                </div>
                <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    PREMIUM
                </div>
            </div>

            {/* Slide Content */}
            <div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden bg-black/40">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center"
                        style={{ background: HOT_AIRDROPS[current].image }}
                    >
                        <h3 className="text-yellow-300 font-bold text-xl mb-2 drop-shadow-md">{HOT_AIRDROPS[current].title}</h3>
                        <p className="text-green-300 font-bold text-sm mb-4 drop-shadow-md">{HOT_AIRDROPS[current].subtitle}</p>
                        <h1 className="text-5xl font-black text-white tracking-wider drop-shadow-xl stroke-black" style={{ WebkitTextStroke: "1px black" }}>
                            {HOT_AIRDROPS[current].name}
                        </h1>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Info Section */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                        <Gem className="text-blue-400" size={20} />
                    </div>
                    <h4 className="font-bold text-lg">{HOT_AIRDROPS[current].platform}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {HOT_AIRDROPS[current].desc}
                </p>
            </div>

            {/* Footer Controls & Button */}
            <div className="flex items-center justify-between gap-4">
                <Link href="#" className="flex-1 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-center transition-colors">
                    KUNJUNGI
                </Link>
                <Link href="#" className="flex-1 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold py-3 rounded-lg text-center transition-colors">
                    DETAIL
                </Link>
            </div>

            {/* Pagination & Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6">
                <button onClick={prev} className="p-2 rounded-full border border-blue-500/30 hover:bg-blue-500/20 text-blue-400 transition-colors">
                    <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                    {HOT_AIRDROPS.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-blue-500' : 'bg-gray-700'}`}
                        />
                    ))}
                </div>
                <button onClick={next} className="p-2 rounded-full border border-blue-500/30 hover:bg-blue-500/20 text-blue-400 transition-colors">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
