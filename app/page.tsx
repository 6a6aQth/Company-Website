import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroScene } from "@/components/hero-scene"
import { PartnersClients } from "@/components/partners-clients"
import { ServiceCard } from "@/components/service-card"
import { TestimonialMarquee } from "@/components/testimonial-marquee"
import RadialOrbitalTimeline from "@/components/radial-orbital-timeline"

const services = [
  {
    title: "Artificial Intelligence",
    description:
      "We research, design and deploy scalable AI systems studying how AI can be adapted, localized, and scaled for Malawi and the broader African continent.",
    href: "/services/ai",
    icon: "Brain",
  },
  {
    title: "AR Experience",
    description:
      "Create immersive augmented reality experiences that transform how users interact with your products and services in revolutionary ways.",
    href: "/services/ar",
    icon: "Glasses",
  },
  {
    title: "Web3 Exploration",
    description:
      "step into the future of the internet with decentralized technologies tailored for African communities and economies.",
    href: "/services/web3",
    icon: "Boxes",
  },
  {
    title: "Business Automation",
    description:
      "We deliver beautifully designed, functional systems that automate workflows, improve user experience, and elevate small business potential.",
    href: "/services/web-design",
    icon: "Globe",
  },
]

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        {/* Hero Background */}
        <HeroScene />

        {/* Hero Content */}
        <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Innovating Africa&apos;s Future with <span className="text-blue-400">Emerging Technologies</span>
          </h1>
          <p className="max-w-[700px] text-lg text-gray-200 sm:text-xl">
           Redefining the future of business with digital solutions crafted for growth, inclusion, and sustainability.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild size="lg" className="blue-gradient button-glow rounded-full text-primary-foreground">
              <Link href="/learn-more">Learn More</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="button-glow rounded-full border-2 border-blue-400 bg-transparent text-blue-400 hover:bg-blue-400/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container relative">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">What We Do</h2>
            <p className="mt-4 text-gray-400">Comprehensive solutions powered by research, innovation & emerging technologies.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="relative">
                <ServiceCard {...service} />
                {/* Mobile-only overlay to improve text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none sm:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container relative">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">How We Work</h2>
            <p className="mt-4 text-gray-400">Our systematic approach to delivering innovative solutions</p>
          </div>
          <div className="min-h-[600px]">
            <RadialOrbitalTimeline
              timelineData={[
                {
                  id: 1,
                  title: "Discovery",
                  date: "Phase 1",
                  content: "We begin by understanding your business needs, challenges, and goals through comprehensive research and stakeholder interviews.",
                  category: "Research",
                  icon: "Search",
                  relatedIds: [2],
                  status: "completed",
                  energy: 100,
                },
                {
                  id: 2,
                  title: "Strategy",
                  date: "Phase 2",
                  content: "Our team develops a tailored strategy that aligns with your objectives and leverages the latest technologies.",
                  category: "Planning",
                  icon: "Lightbulb",
                  relatedIds: [1, 3],
                  status: "completed",
                  energy: 90,
                },
                {
                  id: 3,
                  title: "Development",
                  date: "Phase 3",
                  content: "We build your solution using agile methodologies, ensuring quality and scalability at every step.",
                  category: "Build",
                  icon: "Code",
                  relatedIds: [2, 4],
                  status: "in-progress",
                  energy: 85,
                },
                {
                  id: 4,
                  title: "Launch",
                  date: "Phase 4",
                  content: "We deploy your solution with comprehensive testing and support, ensuring a smooth rollout.",
                  category: "Deploy",
                  icon: "Rocket",
                  relatedIds: [3, 5],
                  status: "pending",
                  energy: 75,
                },
                {
                  id: 5,
                  title: "Optimize",
                  date: "Phase 5",
                  content: "Continuous monitoring and optimization to ensure your solution evolves with your business needs.",
                  category: "Improve",
                  icon: "CheckCircle",
                  relatedIds: [4],
                  status: "pending",
                  energy: 70,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
        <div className="container relative">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground">Hear from businesses we&apos;ve helped transform</p>
          </div>
          <TestimonialMarquee />
        </div>
      </section>

      <PartnersClients />
    </>
  )
}
