import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { articles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PLACEHOLDER_URL = "ADD_LINK_HERE";

function formatArticleDate(isoDate: string) {
  const d = new Date(`${isoDate}T12:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const Articles = () => (
  <Layout>
    <Seo
      title="Articles | Digital Health, AI, Healthcare Analytics, Medical Writing"
      description="Articles and newsletter writing on medicine, digital health, AI, healthcare analytics, medical writing, and professional practice—Dr. Bonnke Arunga."
      path="/articles"
    />
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <header className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="page-heading">Articles</h1>
            <p className="page-subheading max-w-3xl">
              Long-form notes on medicine, digital health, clinical AI, healthcare analytics, medical writing, and how
              licensed practice intersects with data and product decisions. These pieces complement the service pages on{" "}
              <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
                digital health consulting
              </Link>
              ,{" "}
              <Link to="/healthcare-analytics" className="text-accent font-medium hover:underline">
                healthcare analytics
              </Link>
              , and{" "}
              <Link to="/medical-writing" className="text-accent font-medium hover:underline">
                medical writing services
              </Link>
              —and the case narratives on{" "}
              <Link to="/projects" className="text-accent font-medium hover:underline">
                selected projects
              </Link>
              .
            </p>
          </motion.div>
        </header>

        <section aria-labelledby="articles-list-heading">
          <h2 id="articles-list-heading" className="sr-only">
            Newsletter articles from LinkedIn
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((article, i) => {
              const href = article.url === PLACEHOLDER_URL ? undefined : article.url;
              return (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <Card className="h-full flex flex-col card-hover border-border">
                    <CardHeader className="space-y-3">
                      <Badge variant="secondary" className="w-fit font-medium">
                        {article.category}
                      </Badge>
                      <time
                        className="text-xs text-muted-foreground uppercase tracking-wider"
                        dateTime={article.date}
                      >
                        {formatArticleDate(article.date)}
                      </time>
                      <h3 className="font-serif text-xl text-foreground leading-snug">{article.title}</h3>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                      <p className="mt-4 text-xs text-muted-foreground">
                        Originally published on LinkedIn
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2">
                      {href ? (
                        <Button asChild variant="default" size="sm" className="gap-1.5">
                          <a href={href} target="_blank" rel="noopener noreferrer">
                            Read article
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          </a>
                        </Button>
                      ) : (
                        <Button variant="secondary" size="sm" disabled title="Set the article URL in src/data/articles.ts">
                          Read article
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default Articles;
