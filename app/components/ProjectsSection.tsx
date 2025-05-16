const bubbleClass =
  "inline-block self-start mt-auto px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors";


const projects = [
  {
    name: "Modulo Automata",
    link: "https://github.com/ByroBuff/modulo-automata",
    description:
      "An interactive cellular-automata playground with the key component being modular arithmetic",
    image: "/modulo.png"
  },
  {
    name: "UDOT",
    link: "https://github.com/ByroBuff/UDOT",
    description:
      "An OSINT tool to recursively investigate a discord profile by checking its connected accounts, bio, live actions, etc.",
    image: "/udot.png"
  },
  {
    name: "FakeDat",
    link: "https://github.com/ByroBuff/fakedat",
    description:
      "A fake json data generator, has support for custom data types, data types that take parameters and formatting operators",
    image: "/fakedat.png"
  },
  {
    name: "GitFinder",
    link: "https://github.com/ByroBuff/gitFinder",
    description:
      "An OSINT tool to search through a github user's repositories and public commits to find any email addresses used",
    image: "/gitfinder.png"
  },
];

const fallbackImg = "/code.jpg";

export default function ProjectsSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, link, description, image }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {/* Card wrapper with subtle outline */}
              <div className="h-full flex flex-col rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-indigo-400 dark:group-hover:ring-indigo-500">
                {/* Image */}
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={image || fallbackImg}
                    alt={name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 space-y-4 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                    {description}
                  </p>

                  {/* GitHub bubble using the same colors as SkillsSection tags */}
                  <span className={bubbleClass}>View on GitHub</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
