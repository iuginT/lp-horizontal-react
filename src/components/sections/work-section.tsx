import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-16 sm:px-6 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 md:mb-2 font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-foreground">
            Featured
          </h2>
          <p className="font-mono text-xs md:text-sm lg:text-base text-foreground/60">/ Recent explorations</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Kinetic Typography",
              category: "Interactive Experience",
              year: "2024",
              direction: "left",
            },
            {
              number: "02",
              title: "Generative Patterns",
              category: "Visual System",
              year: "2024",
              direction: "right",
            },
            {
              number: "03",
              title: "Spatial Interface",
              category: "3D Navigation",
              year: "2023",
              direction: "left",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 md:py-6 lg:py-8 transition-all duration-700 hover:border-foreground/20 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "100%" : "100%",
      }}
    >
      <div className="flex items-baseline gap-2 sm:gap-4 md:gap-8">
        <span className="font-mono text-xs sm:text-sm md:text-base text-foreground/30 transition-colors group-hover:text-foreground/50">
          {project.number}
        </span>
        <div>
          <h3 className="mb-0.5 md:mb-1 font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2">
            {project.title}
          </h3>
          <p className="font-mono text-[10px] sm:text-xs md:text-sm text-foreground/50">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-[10px] sm:text-xs md:text-sm text-foreground/30">{project.year}</span>
    </div>
  )
}

