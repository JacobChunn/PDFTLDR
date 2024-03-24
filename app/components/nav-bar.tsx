"use client"
import Link from "next/link";
import { useSession } from "next-auth/react"

export default function NavBar() {

	const { data: session, status } = useSession();

	return (
		<header className="fixed top-0 w-full [background:var(--color-white)] [color:var(--color-black)] p-4 border-b-2 flex justify-between items-center z-10">
			<div className="ml-8 [font-family:var(--primary-font)]">
				<h1>PDF:TLDR</h1>
			</div>
			<div className="[font-family:var(--secondary-font)] flex-grow flex justify-center">
				<ul className="flex gap-[40px]">
					<button className="[color:var(--color-black)]">
						<Link href="/landing">Home</Link>
					</button>
					<button className="[color:var(--color-black)]">
						<Link href="/upload">Text Bot</Link>
					</button>
					<button className="[color:var(--color-black)]">
						<Link href="/profile">Profile</Link>
					</button>
				</ul>
			</div>
			<div className="ml-auto">
				<button className="[color:var(--color-black)] font-bold">
					<Link
						href="/login"
						className="[color:var(--color-black)] [font-family:var(--secondary-font)] font-medium"
					>
						Log In
					</Link>
				</button>
			</div>
		</header>
	)
}