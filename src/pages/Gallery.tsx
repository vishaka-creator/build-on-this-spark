import BottomNav from "@/components/BottomNav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "Tile", "Marble", "Texture", "Stone"];

const products = [
  { id: 1, name: "Classic Marble White", category: "Marble", price: 89, dimensions: "4*4" },
  { id: 2, name: "Modern Stone Grey", category: "Stone", price: 75, dimensions: "3*3" },
  { id: 3, name: "Premium Ceramic Tile", category: "Tile", price: 65, dimensions: "2*2" },
  { id: 4, name: "Textured Oak Wood", category: "Texture", price: 95, dimensions: "4*6" },
  { id: 5, name: "Elegant Black Marble", category: "Marble", price: 120, dimensions: "4*4" },
  { id: 6, name: "Rustic Stone Pattern", category: "Stone", price: 85, dimensions: "3*4" },
  { id: 7, name: "Glossy White Tile", category: "Tile", price: 55, dimensions: "2*2" },
  { id: 8, name: "Natural Wood Texture", category: "Texture", price: 100, dimensions: "4*8" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-card border-b border-border p-4">
        <h1 className="text-2xl font-bold text-center">Gallery</h1>
      </header>

      <div className="p-4 space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square bg-muted" />
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-xs text-muted-foreground">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Rs. {product.price}({product.dimensions}) Feet</span>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Gallery;
