import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
}

function Icon(props: Props) {
  return (
    <span
      className="icon"
      style={{
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'middle',
        margin: '0 0.3rem 0 0'
      }}
    >
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        style={{
          margin: '0 auto'
        }}
      />
    </span>
  )
}

export default Icon
