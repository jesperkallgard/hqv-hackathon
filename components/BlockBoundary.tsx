"use client";

import { Component, type ReactNode } from "react";

type Props = { children: ReactNode; fallback: ReactNode };
type State = { failed: boolean };

/**
 * One boundary per block. A block that throws is replaced by its fallback and
 * the rest of the page keeps rendering.
 */
export class BlockBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error("[block] render failed", error);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
