import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Card className="glass-card p-12 text-center neon-glow max-w-md mx-auto">
        <div className="text-8xl mb-6 gradient-text font-bold">404</div>
        <h1 className="text-2xl font-bold mb-4 text-foreground">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist. Let's get you back to the portfolio.
        </p>
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
          onClick={() => window.location.href = "/"}
        >
          Return to Portfolio
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
