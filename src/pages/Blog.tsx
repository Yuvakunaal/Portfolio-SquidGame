import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import type { PostMeta } from "../lib/posts";
import PageNav from "../components/PageNav";

const postModules = import.meta.glob("../posts/*.tsx", { eager: true }) as Record<
  string,
  { meta: PostMeta }
>;

const posts: PostMeta[] = Object.values(postModules)
  .map((m) => m.meta)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}

const PostCard = ({ post, index }: { post: PostMeta; index: number }) => {
  const { ref, inView } = useInView(0.08);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: inView ? `${index * 0.1}s` : "0s" }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block h-full gleam-card glass rounded-lg overflow-hidden border border-squid-red/20 hover:border-squid-red/50 transition-all duration-500 cursor-hover"
        style={{ minHeight: "280px" }}
      >
        <div className="p-7 h-full flex flex-col">
          {/* Symbol + date */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-squid-red font-orbitron font-black text-2xl leading-none">
              {post.symbol}
            </span>
            <span className="text-xs font-orbitron text-gray-600 tracking-widest">
              {formatDate(post.date)}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-orbitron px-2 py-0.5 border border-squid-red/25 text-squid-red/60 rounded-sm tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="font-orbitron font-bold text-squid-white text-sm leading-snug mb-3 group-hover:text-squid-red transition-colors duration-300">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="font-rajdhani text-gray-500 text-sm leading-relaxed flex-1 group-hover:text-gray-400 transition-colors duration-300">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
            <span className="text-xs font-orbitron text-gray-700 tracking-widest">
              {post.readTime} MIN READ
            </span>
            <span className="text-xs font-orbitron text-squid-red/50 group-hover:text-squid-red transition-colors duration-300 tracking-widest">
              READ →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Blog = () => {
  const { ref: headingRef, inView: headingInView } = useInView();

  return (
    <div className="min-h-screen bg-squid-black text-squid-white">
      <PageNav currentPage="FIELD REPORTS" />

      <div className="pt-28 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div
            ref={headingRef}
            className={`mb-16 fade-in-section ${headingInView ? "is-visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-squid-red/35 font-orbitron text-xs tracking-[0.25em]">
                CLASSIFICATION: PUBLIC
              </span>
              <div className="h-px flex-1 bg-squid-red/10" />
              <span className="text-squid-red/35 font-orbitron text-xs tracking-widest">
                {posts.length} REPORT{posts.length !== 1 ? "S" : ""}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-orbitron font-black neon-text mb-4 leading-none">
              FIELD REPORTS
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mb-5" />
            <p className="font-rajdhani text-squid-cyan text-xl">
              Dispatches from the AI frontier — what I built, what broke, what I
              learned.
            </p>
          </div>

          {/* Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-32">
              <div className="text-3xl text-squid-red/20 mb-5 tracking-widest">
                ▲ &nbsp; ● &nbsp; ■
              </div>
              <p className="font-orbitron text-gray-700 text-xs tracking-[0.3em]">
                TRANSMITTING FIRST REPORT...
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-squid-red/10 flex items-center justify-between">
            <Link
              to="/"
              className="text-xs font-orbitron text-gray-600 hover:text-squid-red transition-colors cursor-hover tracking-widest"
            >
              ← BACK TO THE GAME
            </Link>
            <div className="flex gap-3 text-squid-red/15 text-xs">
              <span>▲</span>
              <span>●</span>
              <span>■</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
