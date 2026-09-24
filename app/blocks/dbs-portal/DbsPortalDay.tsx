/**
 * What the room actually did, in the room's own words.
 *
 * Every quotation here is lifted from the chat transcripts, not from the
 * write-ups the agent produced at each clock — those compressed a fifteen
 * minute conversation into five points and lost most of it. A person reading
 * this should be able to find their own sentence.
 */
import React from "react";

export default function DbsPortalDay({
  title,
  standfirst,
  note,
  sprints,
  threads,
  landed,
  realise,
  hard,
  next: nextUp,
}) {
  return (
    <>
      <section className="day-open">
        <h1>{title}</h1>
        <p className="day-standfirst">{standfirst}</p>
        <p className="day-note">{note}</p>
      </section>

      {sprints.map((sprint) => (
        <section key={sprint.number} className="day-sprint">
          <div className="day-sprint-head">
            <span className="day-sprint-number">Sprint {sprint.number}</span>
            <h2>{sprint.question}</h2>
            <p className="day-sprint-meta">{sprint.meta}</p>
          </div>
          <ul className="day-voices">
            {sprint.voices.map((voice) => (
              <li key={voice.who} className="day-voice">
                <p className="day-who">
                  {voice.who}
                  <span className="day-group">{voice.group}</span>
                </p>
                <blockquote>
                  {voice.said.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </blockquote>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="day-threads">
        <h2>What kept coming back</h2>
        <p className="section-summary">
          Six groups were drawn fresh every sprint, so nobody worked with the same people twice.
          These are the things different people arrived at separately.
        </p>
        <div className="day-thread-grid">
          {threads.map((thread) => (
            <article key={thread.title} className="day-thread">
              <h3>{thread.title}</h3>
              <p>{thread.body}</p>
              <p className="day-said-by">{thread.who}</p>
            </article>
          ))}
        </div>
      </section>

      {realise ? (
        <section className="day-realise">
          <h2>{realise.title}</h2>
          <p className="section-summary">{realise.summary}</p>
          <ol className="day-steps">
            {realise.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <p className="day-said-by">{step.who}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {hard ? (
        <section className="day-hard">
          <h2>{hard.title}</h2>
          <p className="section-summary">{hard.summary}</p>
          <ul className="day-hard-list">
            {hard.items.map((item) => (
              <li key={item.what}>
                <span className="day-hard-what">{item.what}</span>
                <span className="day-hard-who">{item.who}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {nextUp ? (
        <section className="day-next">
          <h2>{nextUp.title}</h2>
          <ul className="day-next-list">
            {nextUp.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="day-landed">
        <h2>What is on the page now, and whose it was</h2>
        <ol className="day-landed-list">
          {landed.map((item) => (
            <li key={item.what}>
              <span className="day-landed-what">{item.what}</span>
              <span className="day-landed-who">{item.who}</span>
              <span className="day-landed-words">{item.words}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
