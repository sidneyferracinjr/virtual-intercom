import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          Selecione o apartamento
        </h1>
        <div className="flex gap-3 items-center flex-row flex-wrap justify-center">
          {Array.from({ length: 17 }, (_, i) => (
            <a
              key={i}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto m-2"
              href={`https://virtualintercom.vercel.app/${String(
                i + 1
              ).padStart(2, "0")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {String(i + 1).padStart(2, "0")}
            </a>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://virtualintercom.vercel.app/resident"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sou morador
        </a>
      </footer>
    </div>
  );
}
