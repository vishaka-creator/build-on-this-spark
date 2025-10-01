import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-card border-b border-border p-4">
        <h1 className="text-2xl font-bold text-center">Search</h1>
      </header>

      <div className="p-4 space-y-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search flooring, tiles, marble..." 
            className="pl-10"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {["Marble", "Wood Texture", "Modern Tiles", "Stone Pattern", "Ceramic"].map((term) => (
              <button
                key={term}
                className="px-4 py-2 rounded-full border border-border hover:bg-accent transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Searches</h2>
          <div className="space-y-2 text-muted-foreground">
            <p className="text-sm">No recent searches</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Search;
