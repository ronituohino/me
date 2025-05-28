import type { JSXElement } from "solid-js";

export type LinkProps = {
  href: string;
  ariaLabel?: string;
  title?: string;
  class?: string;
  children?: JSXElement;
};

export function Link(props: LinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={props.ariaLabel}
      title={props.title}
      class={props.class}
    >
      {props.children}
    </a>
  );
}
