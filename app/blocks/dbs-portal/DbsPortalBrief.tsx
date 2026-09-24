/**
 * The brief.
 *
 * The day page is the record — everything twenty-two people said, in their own
 * words. This is the thing you hand to whoever picks the work up: what is being
 * built, what it has to do, what the first version contains, and what will stop
 * it. Nothing here is new. It is the day, decided.
 */
import React from "react";

export default function DbsPortalBrief({
  eyebrow,
  title,
  standfirst,
  meta,
  vision,
  problem,
  audience,
  principles,
  scope,
  content,
  build,
  risks,
  next: nextUp,
  ask,
}) {
  return (
    <>
      <section className="brief-open">
        {eyebrow ? <p className="brief-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="brief-standfirst">{standfirst}</p>
        {meta ? (
          <dl className="brief-meta">
            {meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </section>

      {vision ? (
        <section className="brief-vision">
          <p className="brief-vision-words">{vision.words}</p>
          <p className="brief-vision-who">{vision.who}</p>
        </section>
      ) : null}

      {problem ? (
        <section className="brief-block">
          <h2>{problem.title}</h2>
          {problem.body.map((line) => (
            <p key={line} className="brief-body">
              {line}
            </p>
          ))}
        </section>
      ) : null}

      {audience ? (
        <section className="brief-block">
          <h2>{audience.title}</h2>
          <ul className="brief-audience">
            {audience.items.map((item) => (
              <li key={item.who}>
                <span className="brief-audience-who">{item.who}</span>
                <span className="brief-audience-want">{item.wants}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {principles ? (
        <section className="brief-block">
          <h2>{principles.title}</h2>
          <p className="section-summary">{principles.summary}</p>
          <ul className="brief-principles">
            {principles.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {scope ? (
        <section className="brief-block">
          <h2>{scope.title}</h2>
          <p className="section-summary">{scope.summary}</p>
          <div className="brief-scope">
            <div className="brief-scope-col brief-scope-in">
              <h3>{scope.inLabel}</h3>
              <ul>
                {scope.first.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="brief-scope-col brief-scope-out">
              <h3>{scope.laterLabel}</h3>
              <ul>
                {scope.later.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {content ? (
        <section className="brief-block">
          <h2>{content.title}</h2>
          <p className="section-summary">{content.summary}</p>
          <ul className="brief-content">
            {content.items.map((item) => (
              <li key={item.what}>
                <h3>{item.what}</h3>
                <p>{item.body}</p>
                <p className="brief-source">{item.source}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {build ? (
        <section className="brief-block">
          <h2>{build.title}</h2>
          <p className="section-summary">{build.summary}</p>
          <ol className="day-steps">
            {build.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          {build.open ? (
            <div className="brief-open-questions">
              <h3>{build.open.title}</h3>
              <ul className="day-next-list">
                {build.open.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {risks ? (
        <section className="brief-block">
          <h2>{risks.title}</h2>
          <p className="section-summary">{risks.summary}</p>
          <ul className="brief-risks">
            {risks.items.map((item) => (
              <li key={item.risk}>
                <h3>{item.risk}</h3>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {nextUp ? (
        <section className="brief-block">
          <h2>{nextUp.title}</h2>
          <ol className="day-steps">
            {nextUp.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {ask ? (
        <section className="brief-ask">
          <h2>{ask.title}</h2>
          <p>{ask.body}</p>
          {ask.link ? (
            <a className="brief-ask-link" href={ask.link.href}>
              {ask.link.label}
            </a>
          ) : null}
        </section>
      ) : null}
    </>
  );
}
