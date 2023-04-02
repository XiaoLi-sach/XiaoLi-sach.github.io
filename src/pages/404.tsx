import { useRouter } from 'next/router'
export default function Custom404() {
  const router = useRouter()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5'
      }}
    >
      <img
        src="/404.svg"
        alt="404"
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: 'auto',
          margin: '0 auto',
          display: 'block'
        }}
      />
      <button
        style={{
          backgroundColor: '#fff',
          border: '1px solid #d1d5da',
          borderRadius: '0.25rem',
          color: '#24292e',
          cursor: 'pointer',
          display: 'inline-block',
          fontSize: '1rem',
          fontWeight: 600,
          lineHeight: '1.25',
          padding: '0.5rem 1rem',
          textAlign: 'center',
          textDecoration: 'none',
          verticalAlign: 'middle',
          whiteSpace: 'nowrap',
          margin: '0.5rem'
        }}
        onClick={() => router.back()}
      >
        返回上一页
      </button>
    </div>
  )
}
