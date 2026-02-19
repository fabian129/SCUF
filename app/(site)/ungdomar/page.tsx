import { YouthHero } from "@/components/sections/youth/YouthHero";
import { YouthImpact } from "@/components/sections/youth/YouthImpact";

export default function UngdomPage() {
    return (
        <main className="min-h-screen bg-white">
            <YouthHero />
            <YouthImpact />
            {/* S2 Content will follow */}
        </main>
    );
}
