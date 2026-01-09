'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gem } from 'lucide-react';
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
        image: "linear-gradient(to right, #4f46e5, #9333ea)"
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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % HOT_AIRDROPS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-[#0F111A]/0 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl -z-10" />

            {/* Header */}
            <div className="flex justify-between items-center mb-6 px-4">
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
            <div className="relative h-[300px] mb-6 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center"
                        style={{ background: HOT_AIRDROPS[current].image }}
                    >
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-yellow-300 font-bold text-2xl mb-2 drop-shadow-md"
                        >
                            {HOT_AIRDROPS[current].title}
                        </motion.h3>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-green-300 font-bold text-base mb-6 drop-shadow-md"
                        >
                            {HOT_AIRDROPS[current].subtitle}
                        </motion.p>
                        <motion.h1
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="text-6xl font-black text-white tracking-widest drop-shadow-2xl stroke-black"
                            style={{ WebkitTextStroke: "1px rgba(0,0,0,0.5)" }}
                        >
                            {HOT_AIRDROPS[current].name}
                        </motion.h1>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Info Section */}
            <div className="mb-8 px-4 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h4 className="font-bold text-xl mb-2">{HOT_AIRDROPS[current].platform}</h4>
                        <p className="text-gray-400 text-sm max-w-lg mx-auto line-clamp-2">
                            {HOT_AIRDROPS[current].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 px-4 max-w-lg mx-auto mb-8">
                <Link href="#" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3.5 rounded-xl text-center transition-all shadow-lg hover:shadow-blue-500/25">
                    KUNJUNGI
                </Link>
                <Link href="#" className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3.5 rounded-xl text-center transition-all backdrop-blur-sm">
                    DETAIL
                </Link>
            </div>

            {/* Minimalist Pagination */}
            <div className="flex justify-center gap-2 pb-2">
                {HOT_AIRDROPS.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-blue-500' : 'w-2 bg-gray-700'}`}
                    />
                ))}
            </div>
        </div>
    );
}
