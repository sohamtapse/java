import Image from "next/image";

export default function Home() {
  return (
    <>
      <a
        href="/Pass.txt"
        download
        className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition"
      >
        Pass.txt
      </a>
      <a
        href="/input_1.txt"
        download
        className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition"
      >
        input_1.txt
      </a>
      <a
        href="/Macro.txt"
        download
        className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition"
      >
        Macro.txt
      </a>
      <a
        href="/input_2.txt"
        download
        className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded shadow-md transition"
      >
        input_2.txt
      </a>
    </>
  );
}
