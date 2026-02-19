import { AboutHero, AboutStats, OrganizationMap, TeamSection, ContactSection, AboutContent } from "@/components/sections/about/AboutComponents";
import { getSiteSettings } from "@/lib/queries/siteSettings";
import { getTeamMembers } from "@/lib/queries/teamMember";

// Revalidate every 60 seconds — content stays fresh without hammering the API
export const revalidate = 60

export default async function OmScufPage() {
    const [settings, members] = await Promise.all([
        getSiteSettings(),
        getTeamMembers(),
    ])

    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <AboutStats settings={settings} />
            <AboutContent />
            <TeamSection members={members} />
            <OrganizationMap />
            <ContactSection settings={settings} />
        </main>
    );
}
