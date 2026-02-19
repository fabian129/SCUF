import { KnowledgeHero } from "@/components/sections/knowledge/KnowledgeHero";
import { CategoryGrid } from "@/components/sections/knowledge/CategoryGrid";
import { getKnowledgeCategories } from "@/lib/queries/knowledgeCategory";

export const revalidate = 60

export default async function KunskapPage() {
    const categories = await getKnowledgeCategories()

    return (
        <main className="min-h-screen bg-white">
            <KnowledgeHero />
            <CategoryGrid categories={categories} />
        </main>
    );
}
