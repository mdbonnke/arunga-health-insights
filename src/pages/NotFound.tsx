import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Seo title="Page Not Found" description="The requested page could not be found." noIndex />
      <section className="section-padding flex min-h-[60vh] items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-4xl text-foreground mb-2">404</h1>
          <p className="text-muted-foreground mb-8">This page does not exist.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild>
              <Link to="/">Return home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/hire-me">Hire me</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
