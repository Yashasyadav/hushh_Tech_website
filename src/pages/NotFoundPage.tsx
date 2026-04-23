import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111f] px-4 py-16 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(19,91,236,0.28),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(0,169,224,0.18),_transparent_38%)]" />
      <div
        className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10"
        style={{ animation: "notFoundFadeIn 0.7s ease-out both" }}
      >
        <style>{`@keyframes notFoundFadeIn { from { opacity: 0; transform: translateY(18px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300/80">Error 404</p>
        <h1 className="mt-4 text-6xl font-black tracking-tight text-white sm:text-8xl">404</h1>
        <p className="mt-4 text-2xl font-semibold text-slate-100 sm:text-3xl">Page Not Found</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-[#07111f]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
