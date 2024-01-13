import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between items-center py-3 px-8 lg:px-10 xl:px-16">
        <Link href={"/"}>
          <div className="font-bold text-2xl text-black">WOW</div>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link
            href={"/signin"}
            className="bg-gray-100 text-gray-700 rounded-full px-7 py-2.5 lg:py-3 hover:opacity-60 duration-100"
          >
            Sign In
          </Link>
          <Link
            href={"/register"}
            className="bg-black text-white rounded-full px-7 py-2.5 lg:py-3 hover:opacity-60 duration-100"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
