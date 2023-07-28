import Link from "next/link";

export default function Header() {
  return (
    <h2 className="animate__animated animate__bounceInLeft">
      <Link href={`/blog`} className='hover:underline'>

        {`<rafael.geronimo.dev/blog>`}

      </Link>
    </h2>
  );
}
