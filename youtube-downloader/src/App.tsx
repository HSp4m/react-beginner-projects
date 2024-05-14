import { ModeToggle } from "./components/mode-toggle";

export function App() {
 
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Youtube downloader</h1>
        <ModeToggle />
      </div>
    </div>
  );

}

