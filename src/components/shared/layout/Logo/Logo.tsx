import Image from "next/image";

interface LogoProps {
  width: number
  height: number
}

export function Logo({ height, width }: LogoProps) {
  return (
    <Image src={'logo.svg'} alt={'logo do insight'} width={width} height={height} />
  )
}