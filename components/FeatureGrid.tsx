"use client";

import { Zap, Cpu, Fingerprint, Settings2, Sparkles, TrendingUp } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const agencyFeatures = [
	{
		title: 'Cinematic Paid Ads',
		icon: Sparkles,
		description: 'High-production ad creatives scaled targeting Meta, Google, and TikTok channels.',
	},
	{
		title: 'Organic Search Systems',
		icon: Zap,
		description: 'Accelerated rank building and SEO campaigns to dominate buyer-intent search words.',
	},
	{
		title: 'Lifecycle CRM Automation',
		icon: Settings2,
		description: 'High-retention flows via SMS and Email systems to scale repeat client cycles.',
	},
	{
		title: 'Headless Next.js Apps',
		icon: Cpu,
		description: 'Bespoke Next.js Shopify storefronts optimized to reduce bounce and lift conversion ratios.',
	},
	{
		title: 'Performance Dashboards',
		icon: TrendingUp,
		description: 'Real-time performance indexes mapping your acquisition ad budgets.',
	},
	{
		title: 'Conversion Optimization',
		icon: Fingerprint,
		description: 'A/B landing page iterations and custom cart flows to maximize average order sizes.',
	},
];

type ViewAnimationProps = {
	delay?: number;
	className?: string;
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export default function FeatureGrid() {
	return (
		<section className="relative py-28 md:py-36 bg-background overflow-hidden border-t border-foreground/[0.02]">
			{/* Ambient background blur */}
			<div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#9a0002]/5 via-transparent to-transparent rounded-bl-full blur-[100px] pointer-events-none" />

			<div className="mx-auto w-full max-w-7xl px-6 md:px-12 space-y-16 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<span className="inline-block text-[10px] uppercase tracking-widest text-[#9a0002] font-bold font-body mb-4 px-3.5 py-1 bg-[#efe6dd] border border-red-500/10 rounded-full">
						Agency Stack
					</span>
					<h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
						Engineered for{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002]">
							exponential scale
						</span>
					</h2>
					<p className="mt-4 text-sm md:text-base text-foreground/50 font-body leading-relaxed max-w-md mx-auto">
						Everything we implement is designed to be fast, data-backed, and optimized to drive measurable growth.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.3}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-dashed divide-foreground/10 border border-dashed border-foreground/10 rounded-3xl overflow-hidden"
				>
					{agencyFeatures.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}
