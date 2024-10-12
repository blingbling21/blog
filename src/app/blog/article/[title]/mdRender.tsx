import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./typo.module.scss";

interface MdRenderProps {
  source: string;
}

export default function MdRender({ source }: MdRenderProps) {
  return (
    <div className={styles.mdRenderWrapper}>
      <MDXRemote source={source} />
    </div>
  );
}
