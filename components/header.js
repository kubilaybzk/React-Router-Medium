import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>AnaSayfa</a>
        </Link>
      </li>
      <li>
        <Link href="/post/first">
          <a>İlk Paylaşım</a>
        </Link>
      </li>
      <li>
        <Link href="/post/second">
          <a>İkinci Paylaşım</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
