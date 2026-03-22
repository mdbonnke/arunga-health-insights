import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/constants";

const Projects = () => (
  <Layout>
    <Helmet>
      <title>Projects — {SITE.name}</title>
      <meta name="description" content="Healthcare analytics and digital health projects addressing real-world clinical and public health challenges." />
    </Helmet>
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Healthcare analytics and digital health projects addressing real-world clinical and public health challenges."
        />
        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card rounded-lg p-8 border border-border card-hover"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
              <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">{p.title}</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <div><span className="font-semibold text-foreground">Problem:</span> {p.problem}</div>
                <div><span className="font-semibold text-foreground">Approach:</span> {p.approach}</div>
                <div><span className="font-semibold text-foreground">Tools:</span> {p.tools}</div>
                <div><span className="font-semibold text-foreground">Outcome:</span> {p.outcome}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
