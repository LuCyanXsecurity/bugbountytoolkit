import { Terminal, Search, Shield, Zap, Database, Bug } from 'lucide-react';

interface StatItem {
    icon: React.ReactNode;
    value: string;
    label: string;
    color: string;
}

const StatsSection = () => {
    const stats: StatItem[] = [
        {
            icon: <Terminal className="w-8 h-8" />,
            value: "100+",
            label: "Security Commands",
            color: "text-red-500"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            value: "15+",
            label: "Categories",
            color: "text-purple-500"
        },
        {
            icon: <Search className="w-8 h-8" />,
            value: "5",
            label: "Methodologies",
            color: "text-cyan-500"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            value: "50+",
            label: "Payloads",
            color: "text-yellow-500"
        },
        {
            icon: <Database className="w-8 h-8" />,
            value: "20+",
            label: "Google Dorks",
            color: "text-green-500"
        },
        {
            icon: <Bug className="w-8 h-8" />,
            value: "4",
            label: "Contributors",
            color: "text-orange-500"
        }
    ];

    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

            {/* Decorative Line */}
            <div className="section-divider mb-16" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Toolkit <span className="gradient-text">Statistics</span>
                    </h2>
                    <p className="text-gray-500">Everything you need for bug bounty hunting</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stats-card group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`${stat.color} mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>
                            <div className="stats-number mb-1">{stat.value}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Line */}
            <div className="section-divider mt-16" />
        </section>
    );
};

export default StatsSection;
