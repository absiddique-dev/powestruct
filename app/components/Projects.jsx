import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Filter,
} from "lucide-react";
import { Button } from "@heroui/react";

const projectsData = [
  {
    id: 1,
    title: "132kV Transmission Line",
    category: "Transmission",
    location: "Guwahati, Assam",
    date: "2023",
    status: "Completed",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Transmission+Line",
    description:
      "Construction of 45km high-voltage transmission lines connecting regional grids.",
  },
  {
    id: 2,
    title: "Rural Electrification Phase II",
    category: "Power Systems",
    location: "Sonitpur District",
    date: "2024",
    status: "Ongoing",
    image: "https://placehold.co/600x400/ea580c/ffffff?text=Rural+Power",
    description:
      "Last-mile connectivity project bringing electricity to 50+ remote villages.",
  },
  {
    id: 3,
    title: "Urban Substation Upgrade",
    category: "Infrastructure",
    location: "Dispur, Assam",
    date: "2022",
    status: "Completed",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Substation",
    description:
      "Modernization of 33/11kV substation with automated control systems.",
  },
  {
    id: 4,
    title: "Telecom Tower Network",
    category: "Telecom",
    location: "Northeast Region",
    date: "2024",
    status: "Ongoing",
    image: "https://placehold.co/600x400/475569/ffffff?text=Telecom+Towers",
    description: "Civil foundation and erection of 200+ 4G/5G telecom towers.",
  },
  {
    id: 5,
    title: "National Highway Lighting",
    category: "Electrical",
    location: "NH-27 Corridor",
    date: "2023",
    status: "Completed",
    image: "https://placehold.co/600x400/334155/ffffff?text=Highway+Lighting",
    description:
      "Installation of energy-efficient LED street lighting across 30km of highway.",
  },
  {
    id: 6,
    title: "Industrial Park Civil Works",
    category: "Civil",
    location: "Silchar",
    date: "2025",
    status: "Ongoing",
    image:
      "https://upmarketresearch.com/assets/images/post%20images/06/1179_Electricity%20Transmission%20Towers.jpg",
    description:
      "Foundation and structural engineering for a new heavy industry complex.",
  },
];

const ProjectCard = ({ project }) => (
  <div className="group relative light:bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
    <div className="relative h-56 overflow-hidden">
      <div className="absolute inset-0 light:bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
      <img
        src={
          "https://upmarketresearch.com/assets/images/post%20images/06/1179_Electricity%20Transmission%20Towers.jpg"
        }
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute top-4 left-4 z-20">
        <span
          className={`
          inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-md border
          ${
            project.status === "Completed"
              ? "bg-emerald-500/90 text-white border-emerald-400"
              : "bg-orange-500/90 text-white border-orange-400 animate-pulse-slow"
          }
        `}
        >
          {project.status === "Completed" ? (
            <CheckCircle2 size={12} />
          ) : (
            <Loader2 size={12} className="animate-spin" />
          )}
          {project.status}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="px-2 py-1 light:bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded shadow-sm">
          {project.category}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-1 text-xs font-medium light:text-slate-500 dark:text-slate-400">
          <Calendar size={14} />
          <span>{project.date}</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium light:text-slate-500 dark:text-slate-400">
          <MapPin size={14} />
          <span>{project.location}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold light:text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
        {project.title}
      </h3>

      <p className="light:text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <Button
        fullWidth
        className="py-3 rounded flex items-center gap-2 text-sm font-bold light:text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mt-auto"
      >
        View Details
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Button>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.status === filter;
  });

  const stats = {
    total: projectsData.length,
    completed: projectsData.filter((p) => p.status === "Completed").length,
    ongoing: projectsData.filter((p) => p.status === "Ongoing").length,
  };

  return (
    <section
      className="py-20 light:bg-white dark:bg-slate-950 transition-colors duration-300 px-4 md:px-8 lg:px-[100px]"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wide mb-4">
              <Filter size={14} className="text-orange-500" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold light:text-slate-900 dark:text-white mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">
                Projects
              </span>
            </h2>
            <p className="light:text-slate-600 dark:text-slate-400 text-lg">
              Showcasing our expertise in delivering critical infrastructure
              across the region.
            </p>
          </div>

          <div className="flex p-1 light:bg-slate-100 dark:bg-slate-900 rounded-xl">
            {["All", "Ongoing", "Completed"].map((status) => (
              <Button
                key={status}
                onPress={() => setFilter(status)}
                className={`
                  relative px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 z-10
                  ${
                    filter === status
                      ? "text-white shadow-md"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }
                `}
              >
                {filter === status && (
                  <div className="absolute inset-0 bg-slate-900 dark:bg-orange-600 rounded-lg -z-10 animate-fadeIn" />
                )}
                <span className="relative flex items-center gap-2">
                  {status}
                  <span
                    className={`
                    px-1.5 py-0.5 rounded text-[10px] bg-white/20 
                    ${filter !== status ? "hidden" : "inline-block"}
                  `}
                  >
                    {status === "All"
                      ? stats.total
                      : status === "Completed"
                      ? stats.completed
                      : stats.ongoing}
                  </span>
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State (Just in case) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
