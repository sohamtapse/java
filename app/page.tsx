import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-5 w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center md:text-left">
          Java
        </h1>
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href="/Pass.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            Pass.txt
          </a>
          <a
            href="/input_1.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            input_1.txt
          </a>
          <a
            href="/Macro.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            Macro.txt
          </a>

          <a
            href="/input_2.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            input_2.txt
          </a>
          <a
            href="/SimpleScheduling.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            SimpleScheduling.txt
          </a>
        </div>
      </div>

      <div className="p-5 w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center md:text-left">
          DBMS
        </h1>
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href="/2.pdf"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            2
          </a>
          <a
            href="/3.pdf"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            3
          </a>
          <a
            href="/4.pdf"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            4
          </a>
          <a
            href="/5.pdf"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            5
          </a>
          <a
            href="/6.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            6
          </a>
          <a
            href="/7.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            7
          </a>
          <a
            href="/8.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            8
          </a>
          <a
            href="/9.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            9
          </a>
          <a
            href="/10.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            10
          </a>
          <a
            href="/11.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            11
          </a>
          <a
            href="/12.txt"
            download
            className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition w-full sm:w-auto text-center"
          >
            12
          </a>
        </div>
      </div>
    </>
  );
}
