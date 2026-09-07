import Link from "next/link";

export function ArrowLink({ href, children, invert = false }: { href: string; children: React.ReactNode; invert?: boolean }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const className = `arrow-link${invert ? " arrow-link--light" : ""}`;
  const content = <span>{children}</span>;

  return external ? (
    <a className={className} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {content}
    </a>
  ) : (
    <Link className={className} href={href}>{content}</Link>
  );
}
