/**
 * One post in the feed: navy headline, what changed and what it meant, a round phase tag, and owner, date and cadence in the meta column.
 */
import React from "react";

const TAG_CLASS = {
  Explore: "tag tag-explore",
  Optimize: "tag tag-optimize",
  Scale: "tag tag-scale"
};

export default function FeedRow({ post }) {
  return (
    <li className="feed-item">
      <div className="feed-main">
        <h3 className="feed-title"><a href="#">{post.title}</a></h3>
        <p className="feed-body">{post.body}</p>
        <div className="feed-tags">
          <span className={TAG_CLASS[post.phase] || "tag"}>{post.phase}</span>
        </div>
      </div>
      <div className="feed-meta">
        <span className="owner">{post.owner}</span>
        <span className="date">{post.date}</span>
        <span className="cadence">{post.cadence}</span>
      </div>
    </li>
  );
}
