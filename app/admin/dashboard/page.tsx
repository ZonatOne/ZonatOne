'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Users, DollarSign, Activity, X, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Airdrop {
    id: string;
    name: string;
    status: 'active' | 'upcoming' | 'ended';
    value: string;
    platform: string;
    description: string;
}

const INITIAL_AIRDROPS: Airdrop[] = [
    { id: '1', name: 'Nebula Protocol', status: 'active', value: '$2000', platform: 'Ethereum', description: 'L2 Scaling Solution' },
    { id: '2', name: 'ZetaChain', status: 'active', value: 'Unknown', platform: 'ZetaChain', description: 'Omnichain Smart Contracts' },
    { id: '3', name: 'Starknet', status: 'upcoming', value: '$1000+', platform: 'Starknet', description: 'Validity Rollup' },
    { id: '4', name: 'Venom', status: 'ended', value: 'Testnet', platform: 'Venom', description: 'Scalable Blockchain' },
];

export default function AdminDashboard() {
    const [airdrops, setAirdrops] = useState<Airdrop[]>(INITIAL_AIRDROPS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentAirdrop, setCurrentAirdrop] = useState<Airdrop | null>(null);

    // Form State
    const [formData, setFormData] = useState<Omit<Airdrop, 'id'>>({
        name: '',
        status: 'active',
        value: '',
        platform: '',
        description: ''
    });

    const handleAddClick = () => {
        setIsEditing(false);
        setFormData({ name: '', status: 'active', value: '', platform: '', description: '' });
        setIsModalOpen(true);
    };

    const handleEditClick = (airdrop: Airdrop) => {
        setIsEditing(true);
        setCurrentAirdrop(airdrop);
        setFormData({
            name: airdrop.name,
            status: airdrop.status,
            value: airdrop.value,
            platform: airdrop.platform,
            description: airdrop.description
        });
        setIsModalOpen(true);
    };

    const handleDeleteClick = (id: string) => {
        if (confirm('Are you sure you want to delete this airdrop?')) {
            setAirdrops(airdrops.filter(a => a.id !== id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && currentAirdrop) {
            setAirdrops(airdrops.map(a => a.id === currentAirdrop.id ? { ...formData, id: currentAirdrop.id } : a));
        } else {
            const newId = Math.random().toString(36).substr(2, 9);
            setAirdrops([...airdrops, { ...formData, id: newId }]);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-gray-400">Manage your airdrops and campaigns</p>
                </div>
                <button
                    onClick={handleAddClick}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-500/20"
                >
                    <Plus size={20} />
                    Add New Airdrop
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { label: 'Total Airdrops', value: airdrops.length, icon: Activity, color: 'text-blue-400' },
                    { label: 'Active Users', value: '12.5k', icon: Users, color: 'text-green-400' },
                    { label: 'Revenue', value: '$45,200', icon: DollarSign, color: 'text-yellow-400' },
                ].map((stat, i) => (
                    <div key={i} className="bg-card/30 border border-white/5 p-6 rounded-xl backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                            </div>
                            <stat.icon className={stat.color} size={24} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Airdrop Management Table */}
            <div className="bg-card/30 border border-white/5 rounded-xl overflow-hidden backdrop-blur-md">
                <div className="p-6 border-b border-white/5">
                    <h2 className="text-xl font-bold">Airdrop List</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-black/20 text-gray-400 text-left text-sm">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Value</th>
                                <th className="px-6 py-4">Platform</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {airdrops.map((item) => (
                                <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium">{item.name}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs border ${item.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                item.status === 'upcoming' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                    'bg-red-500/10 text-red-400 border-red-500/20'
                                            }`}>
                                            {item.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">{item.value}</td>
                                    <td className="px-6 py-4 text-gray-300">{item.platform}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleEditClick(item)}
                                                className="p-2 hover:bg-white/10 rounded-lg text-blue-400 transition-colors"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(item.id)}
                                                className="p-2 hover:bg-white/10 rounded-lg text-red-400 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold">{isEditing ? 'Edit Airdrop' : 'New Airdrop'}</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-400 block mb-1">Name</label>
                                    <input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500/50 outline-none transition-colors"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-1">Value</label>
                                        <input
                                            required
                                            value={formData.value}
                                            onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500/50 outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400 block mb-1">Platform</label>
                                        <input
                                            required
                                            value={formData.platform}
                                            onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500/50 outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400 block mb-1">Status</label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500/50 outline-none transition-colors"
                                    >
                                        <option value="active">Active</option>
                                        <option value="upcoming">Upcoming</option>
                                        <option value="ended">Ended</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400 block mb-1">Description</label>
                                    <textarea
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-purple-500/50 outline-none transition-colors"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    <Save size={18} />
                                    {isEditing ? 'Save Changes' : 'Create Airdrop'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
