/**
 * Page-level wrapper that places the split DBS portal sections in order and preserves the existing front door while adding the new content map.
 */
import React from "react";
import DbsPortalHeader from "./DbsPortalHeader";
import DbsPortalHero from "./DbsPortalHero";
import DbsPortalKaj from "./DbsPortalKaj";
import DbsPortalKpis from "./DbsPortalKpis";
import DbsPortalMetrics from "./DbsPortalMetrics";
import DbsPortalContentMap from "./DbsPortalContentMap";
import DbsPortalAreas from "./DbsPortalAreas";
import DbsPortalPipeline from "./DbsPortalPipeline";
import DbsPortalShowAndTell from "./DbsPortalShowAndTell";
import DbsPortalActivities from "./DbsPortalActivities";
import DbsPortalContacts from "./DbsPortalContacts";
import DbsPortalFooter from "./DbsPortalFooter";

export default function DbsPortalPage(props) {
  return (
    <div className="page">
      <DbsPortalHeader title={props.title} summary={props.summary} nav={props.nav} />

      <main className="main-content">
        <DbsPortalHero hero={props.hero} highlights={props.highlights} />
        <DbsPortalKaj kaj={props.kaj} />
        <DbsPortalKpis title={props.kpisTitle} summary={props.kpisSummary} kpis={props.kpis} />
        <DbsPortalMetrics title={props.metricsTitle} summary={props.metricsSummary} metrics={props.metrics} />
        <DbsPortalContentMap
          title={props.contentMapTitle}
          summary={props.contentMapSummary}
          contentMap={props.contentMap}
        />
        <DbsPortalAreas title={props.areasTitle} summary={props.areasSummary} areas={props.areas} />
        <DbsPortalPipeline
          title={props.pipelineTitle}
          summary={props.pipelineSummary}
          rows={props.pipelineRows}
          knowledge={props.knowledge}
        />
        <DbsPortalShowAndTell
          title={props.showAndTellTitle}
          summary={props.showAndTellSummary}
          items={props.showAndTell}
        />
        <DbsPortalActivities
          title={props.activitiesTitle}
          summary={props.activitiesSummary}
          activities={props.activities}
        />
        <DbsPortalContacts
          title={props.contactsTitle}
          summary={props.contactsSummary}
          contacts={props.contacts}
        />
      </main>

      <DbsPortalFooter footer={props.footer} />
    </div>
  );
}
