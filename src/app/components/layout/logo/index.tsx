import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
        <span className="text-white font-bold text-lg">
          SS
        </span>
      </div>

      <span className="text-2xl font-bold tracking-wide">
        Sreenidhi
      </span>
    </Link>
  );
};

export default Logo;