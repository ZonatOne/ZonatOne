'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Twitter, MessageCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AirdropProps {
    id: string;
    name: string;
    value: string;
    description: string;
    status: 'active' | 'upcoming' | 'ended';
    platform: string;
    tasks: string[];
    link: string;
}

export function AirdropCard({ airdrop, index }: { airdrop: AirdropProps; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

            <div className="relative h-full bg-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className={cn(
                            "text-xs font-semibold px-2 py-1 rounded-full border",
                            airdrop.status === 'active' ? "bg-green-500/10 text-green-400 border-green-500/20" :
                                airdrop.status === 'upcoming' ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                    "bg-red-500/10 text-red-400 border-red-500/20"
                        )}>
                            {airdrop.status.toUpperCase()}
                        </span>
                        <h3 className="text-xl font-bold mt-2 text-white group-hover:text-purple-300 transition-colors">
                            {airdrop.name}
                        </h3>
                        <p className="text-sm text-gray-400">{airdrop.platform}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Value</p>
                        <p className="text-lg font-bold text-green-400">{airdrop.value}</p>
                    </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {airdrop.description}
                </p>

                <div className="space-y-2 mb-6">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Tasks</p>
                    <div className="flex flex-wrap gap-2">
                        {airdrop.tasks.map((task, i) => (
                            <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-300 flex items-center gap-1">
                                {task.includes('Twitter') && <Twitter size={10} />}
                                {task.includes('Telegram') && <MessageCircle size={10} />}
                                {task}
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    href={airdrop.link}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-purple-600 hover:text-white border border-white/10 hover:border-purple-500/50 text-white font-medium py-2.5 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_-5px_theme(colors.purple.500)]"
                >
                    Participate
                    <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
}
