import Link from "next/link";

export default function Share() {
  const pathName = window.location.href;
  const postTitle = document.title;
  const facebookUrl = (`https://facebook.com/sharer.php?u=${pathName}`)
  const twitterShareLink = `https://twitter.com/intent/tweet?text=${postTitle}&url${pathName}`
  return (
    <div>
      <p>Compartilhe</p>
      <ul>
        <li>
          <Link href={facebookUrl}>
            <a target="_blank">
              Facebook
            </a>
          </Link>
        </li>
        <li>
          <Link href={twitterShareLink}>
            <a target="_blank">
              Twitter
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
