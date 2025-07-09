import { Loader as Spinner } from "lucide-react";

interface LoaderProps {
  size?: number
}

export function Loader({ size }: LoaderProps ) {
  return <Spinner className="animate-spin" size={ size ?? 18 } />
}