import Image from "next/image";
import Link from "next/link";
import city_list from "../constants/city_list";

export default function Home() {
  return (

    <main className="min-h-dvh mx-auto px-5 flex flex-col justify-start md:justify-center bg-gray-600 text-gray-100">
      <div className="flex flex-col items-center py-8 w-full">
        <h1 className="text-5xl font-light text-center">Weather</h1>

        <h2 className="text-2xl font-extralight text-center">Select a city</h2>

        <Image className="dark:invert py-6" src={`/assets/logo.svg`} alt="Logo" width={176} height={176} />

        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          {city_list.map((city) => (
            <Link className="text-center min-w-[90px]" key={city.id} href={`/city/${city.name}`}>
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
