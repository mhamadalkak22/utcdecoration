declare module 'aos' {
  const AOS: {
    init: (options?: any) => void
    refresh: () => void
    refreshHard: () => void
  }
  export default AOS
}

declare module 'aos/dist/aos.css'

