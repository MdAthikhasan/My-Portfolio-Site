"use client"
import { motion } from "framer-motion";
import Container from "@/app/components/ui/Container";
import { projects } from "@/app/constants/projects";
import ProjectCard from "@/app/components/projects/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden py-10">
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} >
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            My
            <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text"> Projects</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Explore my recent web development projects and applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
      </motion.div>
    </main>
  );
};

export default ProjectsPage;
