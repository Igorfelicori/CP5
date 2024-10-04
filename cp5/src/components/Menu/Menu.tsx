import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/teoria1">Teoria 1</Link></li>
                <li><Link href="/teoria2">Teoria 2</Link></li>
                <li><Link href="/teoria3">Teoria 3</Link></li>
                <li><Link href="/teoria4">Teoria 4</Link></li>
            </ul>
        </nav>
    )
}
