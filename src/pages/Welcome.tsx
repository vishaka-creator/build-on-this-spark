import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background p-8">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-8 max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight">Trace2View</h1>
          <p className="text-xl text-muted-foreground uppercase tracking-wider">
            Crafting Visions Into Proposals
          </p>
          
          <div className="space-y-4 pt-8">
            <h2 className="text-3xl font-semibold">Get Started</h2>
            <p className="text-muted-foreground">
              Trace2view is a cutting-edge virtual tour software in the design sector that showcases 
              flooring combinations over specified areas, providing peace of mind to residents or 
              designers before making a purchase.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-full max-w-md">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => navigate("/gallery")}
        >
          Skip
        </Button>
        <Button 
          className="flex-1"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
