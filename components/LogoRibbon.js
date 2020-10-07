import Link from 'next/link';

export default function LogoRibbon() {
  return (
    <div className="logo-ribbon">
      <Link href="/">
        <a>
          <img src="/logo_reverse_small1.svg" width="150" />
        </a>
      </Link>
    </div>
  );
}
