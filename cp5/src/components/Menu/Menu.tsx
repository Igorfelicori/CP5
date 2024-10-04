import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    </li>
                <li>
                    <Link href="/teorias">Teorias</Link>
                </li>
                    <Link href="/cosmogonia">Cosmogonia</Link>
                <li>
                    <Link href="/cronologia">Cronologia</Link>
                </li>
                    <Link href="/mitos">Mitos</Link>





            </ul>
        </nav>
    )
}
