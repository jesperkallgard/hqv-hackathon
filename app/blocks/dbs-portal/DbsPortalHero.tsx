/**
 * The opening: one line about the page, and the way in.
 *
 * The search sits in the middle of the hero because it is what somebody
 * arriving actually wants — they have a question, not a section to browse. The
 * chips under it are the questions asked most often, so a person who does not
 * know what to type has somewhere to start.
 */
import React from "react";

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="search-icon">
      <circle cx="9" cy="9" r="5.25" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function DbsPortalHero({ hero, kaj }) {
  return (
    <section className="hero hero-centred" id="overview">
      <div className="hero-copy">
        <h1>{hero.title}</h1>
        {hero.intro ? <p className="hero-intro">{hero.intro}</p> : null}
      </div>

      <form className="hero-search" action={kaj?.action?.href ?? "#kaj"}>
        <label className="visually-hidden" htmlFor="ask-kaj">
          {kaj?.prompt ?? "Ask Kaj"}
        </label>
        <SearchIcon />
        <input
          id="ask-kaj"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="button button-primary">
          {kaj?.action?.label ?? "Ask Kaj"}
        </button>
      </form>

      {kaj?.refuses ? <p className="hero-limit">{kaj.refuses}</p> : null}

      {kaj?.chips?.length ? (
        <div className="chip-row chip-row-centred">
          {kaj.chips.map((chip) => (
            <a key={chip} className="tag tag-action" href="#">
              {chip}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}
