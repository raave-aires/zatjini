// dependências:
import Link from 'next/link';

interface LogoProps {
  className?: string
}

export function Zatjini({ className }: LogoProps ){
  return (
    <Link 
      href="/"
      className={`font-averia text-4xl -translate-y-[3px] select-none ${className}`}
    >
      zatjini
    </Link>
  );
}