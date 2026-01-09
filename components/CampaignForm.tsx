'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, DollarSign, Link as LinkIcon, Calendar } from 'lucide-react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function CampaignForm() {
    const { isConnected } = useAccount();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        budget: '',
        link: '',
        tasks: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle submission (e.g. save to DB or Smart Contract)
        alert('Campaign Created (Demo)');
    };

    if (!isConnected) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Connect Wallet to Create Campaign</h2>
                <p className="text-gray-400 mb-8">You need to connect your wallet to fund and manage your airdrop campaign.</p>
                <div className="flex justify-center">
                    <ConnectButton />
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-cards/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
        >
            <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Campaign Title</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                        placeholder="e.g. Nebula Protocol Early Access"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                    <textarea
                        required
                        rows={4}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                        placeholder="Describe your campaign..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Budget (USDT)</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            <input
                                type="number"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                                placeholder="1000"
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Link</label>
                        <div className="relative">
                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            <input
                                type="url"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                                placeholder="https://..."
                                value={formData.link}
                                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tasks (Comma separated)</label>
                    <input
                        type="text"
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors"
                        placeholder="Follow Twitter, Join Telegram, Visit Website"
                        value={formData.tasks}
                        onChange={(e) => setFormData({ ...formData, tasks: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                    Launch Campaign
                </button>
            </form>
        </motion.div>
    );
}
