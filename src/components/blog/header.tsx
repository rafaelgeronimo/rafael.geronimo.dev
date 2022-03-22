import Link from "next/link";

export default function Header() {
  return (
    <h2 className="animate__animated animate__bounceInLeft">
      <Link href={`/blog`}>
        <a className='hover:underline'>
          {`<rafael.geronimo.dev/blog>`}
        </a>
      </Link>
    </h2>
  )
}
