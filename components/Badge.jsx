import Image from "next/image";

const Badge = ({containerStyles}) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src="/assets/badge.svg" fill alt="Logo" className="object-contain"/>
    </div>
  )
}

export { Badge };