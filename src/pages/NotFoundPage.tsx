import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-semibold text-gray-900">404 - Page Not Found</h1>
      <p className="mt-3 text-gray-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 text-sm font-medium text-[#135bec] underline underline-offset-4 hover:text-[#0f47b2]"
      >
        Go back home
      </Link>
    </div>
  );
}
