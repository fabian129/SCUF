import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity";

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      tag,
      publishedAt,
      location,
      image,
      body
    }`,
    { slug }
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getPost(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-neutral-cream/30 pb-24">
      {/* Hero */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-scuf-green">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white container mx-auto">
          <span className="inline-block px-3 py-1 bg-scuf-green text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            {article.tag}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl drop-shadow-md">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 mt-6 text-white/90 font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {article.location || (article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("sv-SE") : "")}
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              SCUF Redaktionen
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start max-w-5xl mx-auto">

          {/* Sidebar Back Button (Desktop) */}
          <div className="hidden lg:block sticky top-24">
            <Link href="/nyheter">
              <Button variant="ghost" className="hover:bg-transparent hover:text-scuf-green p-0 font-bold text-scuf-dark/60 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tillbaka
              </Button>
            </Link>
          </div>

          {/* Article Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100">
            <div className="lg:hidden mb-6">
              <Link href="/nyheter">
                <Button variant="ghost" size="sm" className="-ml-3 text-scuf-dark/60">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Tillbaka
                </Button>
              </Link>
            </div>

            <div className="prose prose-lg prose-headings:font-bold prose-headings:text-scuf-dark prose-p:text-scuf-dark/80 prose-a:text-scuf-green hover:prose-a:text-scuf-green/80">
              {article.body && <PortableText value={article.body} />}
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
