import { ChildrenHero } from "@/components/sections/children/ChildrenHero";
import { WhatIsCeliaki } from "@/components/sections/children/WhatIsCeliaki";
import { ChildrenActivities } from "@/components/sections/children/ChildrenActivities";

export default function BarnPage() {
    return (
        <main className="min-h-screen bg-neutral-cream">
            <ChildrenHero />
            <WhatIsCeliaki />
            <ChildrenActivities />
            {/* More children sections will go here */}
            <div className="py-24 text-center">
                <p className="text-scuf-dark/40 font-bold">...Mer kul kommer snart...</p>
            </div>
        </main>
    );
}
