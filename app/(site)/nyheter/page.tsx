import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

const TAG_COLORS: Record<string, string> = {
  Läger: "bg-scuf-green/10 text-scuf-green",
  Recept: "bg-scuf-yellow/20 text-yellow-700",
  Nyhet: "bg-scuf-red/10 text-scuf-red",
  Tips: "bg-scuf-green/10 text-scuf-green",
  Event: "bg-purple-100 text-purple-700",
};

async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      tag,
      publishedAt,
      location,
      image,
      "excerpt": array::join(string::split(pt::text(body), "")[0...200], "") + "..."
    }`
  );
}

export default async function NewsIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-neutral-light/30 py-24">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-16 space-y-4">
          <span className="text-scuf-green font-bold tracking-widest uppercase text-sm">Aktuellt</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-scuf-dark">
            Nyheter &amp; Händelser
          </h1>
          <p className="text-xl text-scuf-dark/60 max-w-2xl mx-auto">
            Här samlar vi allt från lägerinbjudningar och recept till viktiga nyheter om celiakiforskning.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-scuf-dark/50 text-lg">Inga nyheter publicerade ännu.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link href={`/nyheter/${post.slug.current}`} key={post._id} className="group">
                <article className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-neutral-100 h-full flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                    {post.image && (
                      <Image
                        src={urlFor(post.image).width(800).height(600).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${TAG_COLORS[post.tag] ?? "bg-neutral-100 text-scuf-dark"}`}>
                      {post.tag}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-scuf-dark/40 text-sm font-medium mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-scuf-green" />
                      {post.location || (post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("sv-SE") : "")}
                    </div>
                    <h3 className="text-2xl font-bold text-scuf-dark mb-4 group-hover:text-scuf-green transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-scuf-dark/70 mb-6 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center text-scuf-green font-bold text-sm group-hover:translate-x-2 transition-transform">
                      Läs hela artikeln
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
