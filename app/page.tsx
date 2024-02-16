import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen [background:var(--bg-secondary)] flex items-center justify-center">
      <section className="[background:var(--bg-primary)] w-[1200px] h-[800px]">
        {/* navbar */}
        <header className="flex justify-between items-center p-4 border-b-2">
          <div className="ml-8">
            <h1>PDFTLDR</h1>
          </div>
          <div className="[font-family:var(--secondary-font)] font-bold">
            <ul className="flex gap-[12px]">
              <li>Eleven</li>
              <li>Twelve</li>
              <li>Thirteen</li>
              <li>Sixteen</li>
            </ul>
          </div>
          <div className="flex gap-[12px]">
            <button className="border-2 [border-color:var(--button-color)] [color:var(--button-color)] [font-family:var(--primary-font)] p-1 px-3">Button Text</button>
            <button className="border-2 [background:var(--button-color)] [border-color:var(--button-color)] [color:var(--font-primary)] [font-family:var(--primary-font)] p-1 px-3">Button Text</button>
          </div>
        </header>
        {/* main content */}
        <main className="flex items-center justify-evenly my-[40px]">
          {/* the picture */}
          <div>
            <img src="/guy.png" alt="guy i found on linkedin" className="w-[500px] h-[500px]"/>
          </div>
          {/* upload document section */}
          <div className="flex flex-col items-center">
            <h1 className="[font-family:var(--primary-font)] text-4xl font-bold">Upload Document</h1>
            <h4 className="[font-family:var(--primary-font)] mb-8">Summarize your way, in seconds.</h4>
            <div className="flex mb-10">
              <div className="[background:var(--font-primary)] border-b-2 [border-color:var(--bg-secondary)] p-2 text-center px-24 cursor-pointer">PDF, Docx, or text file</div>
              <button className="border-2 [background:var(--button-color)] [border-color:var(--button-color)] [color:var(--font-primary)] [font-family:var(--primary-font)] p-1 px-3 ml-2">Upload</button>
            </div>
            <div className="flex justify-start flex-col items-start w-full mb-10">
              <p>Save as</p>
              <input type="text" placeholder="Placeholder" className="[background:var(--font-primary)] border-b-2 [border-color:var(--bg-secondary)] p-2 text-start w-full cursor-pointer"/>
            </div>
            <div className="flex justify-between border-2 [border-color:var(--bg-secondary)] mb-16">
              <div className="flex items-center border-r-2 [border-color:var(--bg-secondary)] p-1 px-5">
                <div className="w-6 h-6 border-2 [border-color:var(--bg-secondary)] rounded-full p-1 mr-4"></div>
                <p className="p-1">Title</p>
              </div>
              <div className="flex items-center border-r-2 [border-color:var(--bg-secondary)] p-1 px-5">
                <div className="w-6 h-6 border-2 [border-color:var(--bg-secondary)] rounded-full p-1 mr-4"></div>
                <p>Title</p>
              </div>
              <div className="flex items-center [border-color:var(--bg-secondary)] p-1 px-5">
                <div className="w-6 h-6 border-2 [border-color:var(--bg-secondary)] rounded-full p-1 mr-4"></div>
                <p>Title</p>
              </div>
            </div>
            <button className="border-2 [border-color:var(--button-color)] [color:var(--button-color)] [font-family:var(--primary-font)] p-1 px-3 w-full">Summarize</button>
          </div>
          {/* footer section */}
        </main>
        <footer className="flex flex-col justify-evenly bg-gray-600 h-[150px]">
            <div className="flex items-center justify-between">
              <div className="p-4 ml-8">
                <h3 className="[color:var(--font-primary)] ">PDFTDLR</h3>
              </div>
              <div>
                <ul className="flex gap-[12px] [color:var(--font-primary)]">
                  <li>Eleven</li>
                  <li>Twelve</li>
                  <li>Thirteen</li>
                  <li>Fourteen</li>
                </ul>
              </div>
              <div className="mr-12">
                ICONS
                {/* icons go here */}
              </div>
            </div>
            <div className="my-8 flex items-center justify-center text-xs [color:var(--font-primary)]">
              <p>PDFTDLR @2024. All rights reserved</p>
            </div>
          </footer>
      </section>
    </div>
  );
}
