import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";

async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...6] {
      _id,
      title,
      slug,
      tag,
      publishedAt,
      location,
      image
    }`
  );
}

const TAG_COLORS: Record<string, string> = {
  Läger: "bg-scuf-green/10 text-scuf-green",
  Recept: "bg-scuf-yellow/20 text-yellow-700",
  Nyhet: "bg-scuf-red/10 text-scuf-red",
  Tips: "bg-scuf-green/10 text-scuf-green",
};

export async function NewsSection() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-neutral-light/50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-scuf-dark">
              Händer på SCUF
            </h2>
            <p className="text-scuf-dark/60 text-lg">
              De senaste nyheterna, aktiviteterna och tipsen.
            </p>
          </div>
          <Link href="/nyheter">
            <Button variant="outline" className="hidden md:flex group">
              Alla nyheter
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <Link key={post._id} href={`/nyheter/${post.slug.current}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-100 flex flex-col h-full cursor-pointer">
              {/* Image */}
              <div className="h-48 w-full relative overflow-hidden bg-neutral-100">
                {post.image && (
                  <Image
                    src={urlFor(post.image).width(800).height(600).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-sm z-10 ${TAG_COLORS[post.tag] ?? "bg-neutral-100 text-scuf-dark"}`}>
                  {post.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-medium text-scuf-dark/40 mb-3 flex items-center gap-2">
                  {post.location ? <MapPin size={12} /> : <Calendar size={12} />}
                  {post.location || (post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("sv-SE") : "")}
                </div>

                <h3 className="text-xl font-bold text-scuf-dark mb-4 leading-tight group-hover:text-scuf-green transition-colors">
                  {post.title}
                </h3>

                <div className="mt-auto pt-4 flex items-center text-scuf-green font-bold text-sm">
                  Läs mer
                  <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 md:hidden text-center">
          <Link href="/nyheter">
            <Button variant="outline" className="w-full">
              Alla nyheter
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
