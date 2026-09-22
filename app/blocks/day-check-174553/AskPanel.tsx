/**
 * The chat under the KPIs. Not a search box: it answers with what is being done and the status.
 */
"use client";

import React, { useState } from "react";

const ANSWERS = [
  {
    match: ["dealer locator", "locator", "dealer", "map"],
    name: "Dealer locator",
    phase: "Scale",
    body: "The locator moved to the new maps API in March, because the old provider stopped returning opening hours and half the dealer cards showed nothing. Hours are back on every dealer and the page loads in 1.3s instead of 4.1s. It is being rolled out to the Norwegian and Danish sites next.",
    owner: "Priya Raman, Platform",
    cadence: "Updated when the API changes"
  },
  {
    match: ["checkout", "payment", "basket", "cart"],
    name: "Checkout and payment",
    phase: "Optimize",
    body: "Checkout remembers the bike you configured for 30 days. Completed checkouts are up 9% on returning visitors and level on first-time visitors. The company-name field has come off private checkout; drop-off on the payment step is down 2.4 points. Both are still under test.",
    owner: "Martin Holt, Commerce",
    cadence: "Updated weekly while the test runs"
  },
  {
    match: ["size guide", "sizing", "size", "inseam"],
    name: "Size guide",
    phase: "Explore",
    body: "Nine sessions were watched end to end. Everyone reached the height table and nobody scrolled to the inseam question, which is the one that decides the frame. A version that asks inseam first is being drafted. Nothing has shipped.",
    owner: "Sofia Lindqvist, Content",
    cadence: "Updated when the research moves"
  },
  {
    match: ["search", "misspell", "zero result"],
    name: "Site search",
    phase: "Scale",
    body: "Search now handles misspelt model names \u2014 \u201cIntro7\u201d, \u201cintro 7\u201d and \u201cintro-7\u201d all return the bike. Zero-result searches fell from 7.8% to 2.1%. The synonym list is being extended to accessories.",
    owner: "Alina Kov\u00e1cs, Search",
    cadence: "Updated monthly"
  },
  {
    match: ["service booking", "booking", "workshop", "service"],
    name: "Service booking",
    phase: "Explore",
    body: "600 bookings were read. Two thirds of the free text is one of four things: brake noise, gears, a flat, or a date change. A four-option picker would cover them. It is not built \u2014 the work so far is the case for building it.",
    owner: "Jonas Bregendahl, Service digital",
    cadence: "Updated when the research moves"
  },
  {
    match: ["stock", "in stock", "badge"],
    name: "Stock badge",
    phase: "Scale",
    body: "\u201cIn stock\u201d used to mean in the warehouse. It now reads per shop. Returns of the \u201cit was not there\u201d kind fell from 38 a week to 11. It is live on every product page.",
    owner: "Priya Raman, Platform",
    cadence: "Updated monthly"
  }
];

const SUGGESTIONS = ["Dealer locator", "Checkout", "Size guide", "Service booking"];

function lookup(q) {
  const s = q.trim().toLowerCase();
  if (!s) return null;
  for (let i = 0; i < ANSWERS.length; i++) {
    const a = ANSWERS[i];
    for (let j = 0; j < a.match.length; j++) {
      if (s.indexOf(a.match[j]) !== -1) return a;
    }
  }
  return { miss: true, query: q.trim() };
}

export default function AskPanel() {
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState(null);

  function ask(q) {
    setText(q);
    setAnswer(lookup(q));
  }

  return (
    <div className="ask">
      <div className="ask-head">
        <h2>Ask about an initiative</h2>
        <p className="lede">Name a thing \u2014 Dealer locator, checkout, the size guide \u2014 and you get what is being done and where it stands.</p>
      </div>

      <form
        className="ask-form"
        onSubmit={function (e) { e.preventDefault(); ask(text); }}
      >
        <label htmlFor="ask-input" className="visually-hidden">What are you looking for?</label>
        <input
          id="ask-input"
          type="text"
          value={text}
          placeholder="Dealer locator"
          onChange={function (e) { setText(e.target.value); }}
        />
        <button type="submit" className="button button-outline">Ask</button>
      </form>

      <div className="ask-suggest">
        {SUGGESTIONS.map(function (s) {
          return (
            <button key={s} type="button" className="chip" onClick={function () { ask(s); }}>{s}</button>
          );
        })}
      </div>

      {answer && !answer.miss ? (
        <div className="ask-answer">
          <div className="ask-answer-head">
            <h3>{answer.name}</h3>
            <span className={"tag tag-" + answer.phase.toLowerCase()}>{answer.phase}</span>
          </div>
          <p>{answer.body}</p>
          <p className="micro">{answer.owner} \u00b7 {answer.cadence}</p>
        </div>
      ) : null}

      {answer && answer.miss ? (
        <div className="ask-answer ask-answer-miss">
          <h3>Nothing here is called \u201c{answer.query}\u201d.</h3>
          <p>Either it is owned outside the web team, or nobody has written it up yet. Check who owns what, and if the area is ours, ask the owner to post it.</p>
          <a className="button button-outline" href="#owners">Who owns what</a>
        </div>
      ) : null}
    </div>
  );
}
