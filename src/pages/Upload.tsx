import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload as UploadIcon, Camera } from "lucide-react";

const Upload = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-card border-b border-border p-4">
        <h1 className="text-2xl font-bold text-center">Upload 2D</h1>
      </header>

      <div className="p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Your Floor Plan</CardTitle>
            <CardDescription>
              Upload a 2D layout of your space to visualize flooring options in 3D
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:bg-accent/50 transition-colors cursor-pointer">
              <UploadIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG, PDF up to 10MB
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use Camera</CardTitle>
            <CardDescription>
              Take a photo of your space directly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              <Camera className="w-4 h-4 mr-2" />
              Open Camera
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How it Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>1. Upload your floor plan or take a photo</p>
            <p>2. Mark the areas you want to visualize</p>
            <p>3. Select flooring options from our gallery</p>
            <p>4. View in 3D with 360° virtual tour</p>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Upload;
