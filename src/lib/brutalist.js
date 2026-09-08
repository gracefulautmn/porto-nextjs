/**
 * Shared brutalist className constants.
 *
 * These are plain string constants (no runtime cost) that centralize the
 * recurring brutalist interaction pattern — hard `on-surface` border, sharp
 * corners (no radius), a hard offset drop shadow, a hover-translate that
 * reduces the shadow, and an active-pressed state that removes it. Using
 * shared constants keeps the markup native (`<a>` / `<button>` / Next `Link`)
 * while guaranteeing the pattern stays consistent across the site.
 *
 * Requirements: 11.1 (border + sharp corners + offset shadow),
 * 11.2 (hover translate + reduced shadow), 11.3 (active pressed + no shadow),
 * 11.4 (zero border radius — guaranteed by never applying a radius utility).
 */

/**
 * Base interactive brutalist button/link.
 * Border in `on-surface`, sharp corners, offset shadow, hover-translate with
 * reduced shadow, and an active-pressed state that removes the shadow.
 */
export const brutalBtn =
  "border-2 border-on-surface shadow-[4px_4px_0px_#1b1b1b] " +
  "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1b1b1b] " +
  "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none " +
  "transition-all cursor-pointer inline-flex items-center justify-center";

/** Primary (teal) brutalist button — `brutalBtn` filled with `primary-container`. */
export const brutalBtnPrimary = `${brutalBtn} bg-primary-container text-on-surface`;

/** Ghost (surface) brutalist button — `brutalBtn` on the lowest surface, hovering to `tertiary-fixed`. */
export const brutalBtnGhost = `${brutalBtn} bg-surface-container-lowest text-on-surface hover:bg-tertiary-fixed`;

/**
 * Bordered JetBrains-Mono bracketed chip (no press interaction).
 * Used for technology chips and Mono_Label pills.
 */
export const monoChip =
  "font-label-mono text-label-mono uppercase px-space-md py-space-xs " +
  "border-2 border-on-surface bg-surface-container-lowest text-on-surface";

/**
 * Shared accessible focus-visible style for interactive brutalist elements.
 * A hard, non-blurred offset ring in `on-surface` keeps focus visible while
 * matching the brutalist language.
 */
export const focusRing =
  "focus:outline-none focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-surface-container-lowest";
