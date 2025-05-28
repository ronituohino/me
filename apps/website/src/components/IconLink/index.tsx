import { Link } from "@components/Link";
import type { LinkProps } from "@components/Link";
import { Icon } from "@components/Icon";
import type { IconProps } from "@components/Icon";

import styles from "./IconLink.module.css";

type IconLinkProps = {
  link: LinkProps;
  icon: IconProps;
};

export function IconLink(props: IconLinkProps) {
  return (
    <Link {...props.link} class={styles.link}>
      <Icon {...props.icon} class={styles.icon} />
    </Link>
  );
}
