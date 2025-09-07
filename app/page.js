import Image from "next/image";
import Link from "next/link";
import yuexia from "./favicon.ico"
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* 导航栏 */}
      <nav className="w-full max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
            首页
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/art" 
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
            >
              醉游长安遇诗仙
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
<div className="text-center">
          <Image
            src={yuexia}
            alt="月下"

            className="rounded-lg shadow-md mx-auto"
          />
          <p className="mt-4 text-gray-600">这里是图片的描述文字</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}