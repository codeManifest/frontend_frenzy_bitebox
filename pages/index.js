import localFont from "next/font/local";
import SearchBar from "@/components/reuse/SearchBar";
import Heroimg from '@/public/img/hero_img.jpg';
import RestaurantCard from "@/components/RestaurantCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="">
      <div
        className="relative top-0 left-0 h-screen flex justify-center items-center flex-col mb-7 bg-cover bg-center"
        style={{ backgroundImage: `url(${Heroimg.src})` }}
      >
        {/* Gradient overlay with 50% opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"></div>

        {/* Second full-opacity overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff845f] to-[#ffc4716c] opacity-100"></div>

        <div className="relative flex justify-center flex-col items-center w-full">
          <h1 className="text-9xl font-semibold text-white">BiteBox</h1>
          <p className="text-center text-xl text-white">Delivering Happiness, One Bite at a Time!</p>
          
          {/* search bar */}
          <SearchBar />
        </div>
      </div>

      <RestaurantCard />
    </main>
  );
}