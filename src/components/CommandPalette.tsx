import React, { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { useNavigate, useLocation } from "react-router-dom";

const SECTIONS = ["home", "about", "skills", "projects", "contact"] as const;

const SECTION_META: Record<(typeof SECTIONS)[number], { label: string; sub: string }> = {
  home:     { label: "LOBBY",      sub: "Hero · intro" },
  about:    { label: "PLAYER",     sub: "About · education" },
  skills:   { label: "ABILITIES",  sub: "Technical arsenal" },
  projects: { label: "CHALLENGES", sub: "Projects · work" },
  contact:  { label: "RECRUIT",    sub: "Contact · hire me" },
};

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = useCallback(
    (sectionId: string) => {
      setOpen(false);
      if (location.pathname === "/") {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 60);
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 650);
      }
    },
    [location.pathname, navigate]
  );

  const goTo = useCallback(
    (href: string) => {
      setOpen(false);
      navigate(href);
    },
    [navigate]
  );

  const openLink = useCallback((url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const openHandler = () => setOpen(true);

    document.addEventListener("keydown", handler);
    document.addEventListener("open-command-palette", openHandler);
    return () => {
      document.removeEventListener("keydown", handler);
      document.removeEventListener("open-command-palette", openHandler);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9000]" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/72 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[min(620px,92vw)]">
        <Command className="palette-root" loop>
          <div className="palette-input-wrap">
            <span className="palette-cmd-icon">⌘</span>
            <Command.Input
              placeholder="TYPE A COMMAND OR SEARCH..."
              className="palette-input"
              autoFocus
            />
          </div>

          <Command.List className="palette-list">
            <Command.Empty className="palette-empty">
              NO TRANSMISSIONS FOUND
            </Command.Empty>

            <Command.Group heading="NAVIGATE">
              {SECTIONS.map((id) => (
                <Command.Item
                  key={id}
                  value={`navigate ${SECTION_META[id].label} ${SECTION_META[id].sub}`}
                  onSelect={() => scrollTo(id)}
                  className="palette-item"
                >
                  <span className="palette-symbol text-squid-red">▲</span>
                  <span className="flex-1">
                    <span className="text-squid-white">{SECTION_META[id].label}</span>
                    <span className="palette-sub"> — {SECTION_META[id].sub}</span>
                  </span>
                  <span className="palette-hint">SCROLL</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="palette-sep" />

            <Command.Group heading="PAGES">
              <Command.Item
                value="field reports blog posts articles"
                onSelect={() => goTo("/blog")}
                className="palette-item"
              >
                <span className="palette-symbol text-squid-pink">●</span>
                <span className="flex-1">
                  <span className="text-squid-white">FIELD REPORTS</span>
                  <span className="palette-sub"> — Blog</span>
                </span>
                <span className="palette-hint">PAGE</span>
              </Command.Item>
              <Command.Item
                value="now current status what im doing building"
                onSelect={() => goTo("/now")}
                className="palette-item"
              >
                <span className="palette-symbol text-squid-pink">■</span>
                <span className="flex-1">
                  <span className="text-squid-white">CURRENT STATUS</span>
                  <span className="palette-sub"> — Now page</span>
                </span>
                <span className="palette-hint">PAGE</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="palette-sep" />

            <Command.Group heading="INTEL">
              <Command.Item
                value="github code repositories projects"
                onSelect={() => openLink("https://github.com/Yuvakunaal")}
                className="palette-item"
              >
                <span className="palette-symbol text-gray-600">■</span>
                <span className="flex-1">
                  <span className="text-squid-white">GitHub</span>
                  <span className="palette-sub"> — Yuvakunaal</span>
                </span>
                <span className="palette-hint">↗</span>
              </Command.Item>
              <Command.Item
                value="linkedin profile network"
                onSelect={() =>
                  openLink(
                    "https://www.linkedin.com/in/boggavarapu-yuva-satya-kunaal-127817290/"
                  )
                }
                className="palette-item"
              >
                <span className="palette-symbol text-gray-600">■</span>
                <span className="flex-1">
                  <span className="text-squid-white">LinkedIn</span>
                  <span className="palette-sub"> — /in/yuva-kunaal</span>
                </span>
                <span className="palette-hint">↗</span>
              </Command.Item>
              <Command.Item
                value="dev.to articles blog writing"
                onSelect={() => openLink("https://dev.to/yuva_kunaal")}
                className="palette-item"
              >
                <span className="palette-symbol text-gray-600">■</span>
                <span className="flex-1">
                  <span className="text-squid-white">dev.to</span>
                  <span className="palette-sub"> — yuva_kunaal</span>
                </span>
                <span className="palette-hint">↗</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="palette-footer">
            <span>
              <kbd>↑↓</kbd> navigate
            </span>
            <span>
              <kbd>↵</kbd> select
            </span>
            <span>
              <kbd>esc</kbd> close
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
};

export default CommandPalette;
