import { ModeToggle } from "./components/mode-toggle";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Search } from "lucide-react";

export function App() {
 
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Youtube downloader</h1>
        <ModeToggle />
      </div>

      <div className="flex w-full items-center space-x-2">
        <Input placeholder="Paste Your URL..." type="text"/>
        <Button>
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );

}

