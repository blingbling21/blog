"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "./typo.module.scss";

interface MdRenderProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
}

export default function MdRender({ source }: MdRenderProps) {
  return <div className={styles.mdRenderWrapper}>
    <MDXRemote {...source} />
  </div>
}