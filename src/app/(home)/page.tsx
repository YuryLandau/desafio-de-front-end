import { Earth } from "lucide-react";
import Link from "next/link";
import city_list from "../constants/city_list";

export default function Home() {
  return (

    <main className="mx-auto px-5 py-8 bg-gray-900 text-beje-400">
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-4xl text-beje-200 mb-4 text-center">Nimbus Weather</h2>
          <Earth className="size-44" />

          <div className="flex items-center justify-center gap-2 pt-6 flex-wrap text-beje-200 ">
            {city_list.map((city) => (
              <div key={city.id} className="flex items-center gap-2 hover:text-beje-400 border-b-2 hover:border-b-beje-400 ">
                <Link className="transition-all duration-300 hover:-translate-y-1" href={`/city/${city.name}`}>
                  <span className="">{city.name}</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
