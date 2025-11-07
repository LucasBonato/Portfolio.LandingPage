import { Link } from "react-router"
import { useEffect, useState } from "react"

export function NotFoundPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{
            transform: mounted ? "translate(-50%, -50%)" : "translate(-50%, -50%) scale(0.75)",
          }}
        />
      </div>

      <div
        className={`relative z-10 text-center transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Large 404 number */}
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none text-transparent bg-clip-text bg-linear-to-br from-primary via-primary/80 to-primary/40 select-none">
            404
          </h1>
          <div className="absolute inset-0 blur-2xl opacity-30">
            <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none text-primary">404</h1>
          </div>
        </div>

        {/* Message */}
        <div
          className={`mt-8 space-y-4 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Back button */}
        <div
          className={`mt-12 transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 rounded-lg transition-all duration-300 font-medium group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
    </div>
  )
}
