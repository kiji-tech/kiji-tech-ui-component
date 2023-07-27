import Link from "next/link";

type NewTabLinkProps = {
    href: string,
    onClick?: Function,
    children: React.ReactNode;
}

export default function NewTabLink({ href, children, onClick = () => { } }: NewTabLinkProps) {
    return (<Link href={href} onClick={() => onClick()} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">{children}</a>
    </Link>)
}