// dependências:
import Link from 'next/link';

interface LogoProps {
  className?: string
}

export function Zatjini({ className }: LogoProps ){
  return (
    <Link 
      href="/"
      className={`font-averia text-3xl -translate-y-[1px] select-none ${className}`}
    >
      zatjini
    </Link>
  );
}