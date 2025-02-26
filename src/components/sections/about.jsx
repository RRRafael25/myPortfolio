import { RevealOnScroll } from "../revealOnScroll";

export const AboutMe = () => {
  const frontEndSkills = ["React", "Vue", "TypeScript", "TailwindCss"];
  const backEndSkills = [
    "Node.Js",
    "PhP",
    "Python",
    "AWS",
    "MongoDB",
    "GraphQl",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>

          {/* TODO: Replace Placeholder   */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rba(59, 130, 246, .2)] transition "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rba(59, 130, 246, .2)] transition "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-white/10 hover: -translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>
                Studying Computer Engineering and Computer Science
                </strong>- University Of British Columbia (2024 - Now)</li>
                <li>Relevant Coursework: Data Structures, Web Development, Cloud Computing...</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover: -translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Web Developer for GFE Distribution LTD. (2024-Current)</h4>
                <p>Designed and developed a website for GFE Distribution to sell their products. Made with HTMl, CSS, and JS, using PhP for the backend, connected to a MongoDB database. Hosted on VPS hosting.</p>
              </div>
              <div className= "font-semibold">
                <h4>Manager at Giftworks Boutique (2023-Current)</h4>
                <p>Operated the entire store alone.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
