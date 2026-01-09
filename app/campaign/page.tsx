import { CampaignForm } from '@/components/CampaignForm';

export default function CampaignPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Promote Your Project</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">Create a comprehensive airdrop campaign to attract thousands of users. Manage your budget and track performance.</p>
            </div>

            <CampaignForm />
        </div>
    );
}
