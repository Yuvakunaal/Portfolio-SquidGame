import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import type { PostMeta } from "../lib/posts";
import PageNav from "../components/PageNav";

const postModules = import.meta.glob("../posts/*.tsx", { eager: true }) as Record<
  string,
  { meta: PostMeta; default: React.ComponentType }
>;

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })
    .toUpperCase();
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [tapeIn, setTapeIn] = useState(false);

  const module = Object.values(postModules).find((m) => m.meta.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setTapeIn(true), 350);
    return () => clearTimeout(t);
  }, [slug]);

  if (!module) {
    return (
      <div className="min-h-screen bg-squid-black flex flex-col items-center justify-center">
        <PageNav currentPage="NOT FOUND" currentPageHref="/blog" />
        <div className="text-center">
          <p className="font-orbitron text-squid-red neon-text text-2xl mb-6">
            REPORT NOT FOUND
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="btn-game cursor-hover"
          >
            ← BACK TO FIELD REPORTS
          </button>
        </div>
      </div>
    );
  }

  const { meta, default: PostContent } = module;

  return (
    <div className="min-h-screen bg-squid-black text-squid-white">
      <PageNav currentPage="FIELD REPORTS" currentPageHref="/blog" />

      <div className="pt-28 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-xs font-orbitron text-gray-600 tracking-widest">
            <Link
              to="/blog"
              className="hover:text-squid-red transition-colors cursor-hover"
            >
              FIELD REPORTS
            </Link>
            <span className="text-squid-red/30">/</span>
            <span className="text-gray-500">{meta.symbol}</span>
          </div>

          {/* Classification tape — the signature element */}
          <div className="relative h-7 mb-8 overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-squid-red flex items-center justify-center transition-transform duration-700 ease-out"
              style={{ transform: tapeIn ? "translateX(0)" : "translateX(-100%)" }}
            >
              <span className="font-orbitron text-squid-black text-xs font-black tracking-[0.35em] select-none">
                ▲ &nbsp; FIELD REPORT &nbsp; ● &nbsp; PLAYER 457 &nbsp; ■ &nbsp; CLASSIFIED &nbsp; ▲
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {meta.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-orbitron px-2 py-0.5 border border-squid-red/30 text-squid-red/70 rounded-sm tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-orbitron font-black text-2xl md:text-3xl text-squid-white mb-5 leading-tight">
            {meta.title}
          </h1>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-8 border-b border-squid-red/12">
            <span className="text-xs font-orbitron text-gray-600 tracking-widest">
              {formatDate(meta.date)}
            </span>
            <span className="text-squid-red/25">·</span>
            <span className="text-xs font-orbitron text-gray-600 tracking-widest">
              {meta.readTime} MIN READ
            </span>
            <span className="text-squid-red/25">·</span>
            <span className="text-xs font-orbitron text-squid-red/50 tracking-widest">
              AUTHOR: PLAYER 457
            </span>
          </div>

          {/* Article */}
          <PostContent />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-squid-red/10 flex items-center justify-between">
            <Link
              to="/blog"
              className="text-xs font-orbitron text-gray-600 hover:text-squid-red transition-colors cursor-hover tracking-widest"
            >
              ← ALL FIELD REPORTS
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

export default BlogPost;
