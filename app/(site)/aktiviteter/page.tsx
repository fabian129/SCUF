import { ActivityList } from "@/components/sections/activities/ActivityList";
import { getUpcomingEvents } from "@/lib/queries/event";

export const revalidate = 60

export default async function AktiviteterPage() {
    const events = await getUpcomingEvents()

    return (
        <main className="min-h-screen bg-white">
            <ActivityList events={events} />
        </main>
    );
}
