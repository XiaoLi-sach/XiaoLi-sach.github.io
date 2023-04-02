import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  src: string
  title: string
  slug?: string
}

const XImg: React.FC<Props> = ({ src, title, slug }: Props) => {
  const image = <Image src={src} alt={`x-image cover image ${title}`} width={500} height={500} />

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default XImg
