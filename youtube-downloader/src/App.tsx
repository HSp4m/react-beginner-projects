import { ModeToggle } from "./components/mode-toggle";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useToast } from "./components/ui/use-toast";
import { Toaster } from "./components/ui/toaster";

export function App() {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [video, setVideo] = useState();

  const searchVideo = async () => {
    const _error = {
      error: "project has been stopped.",
      info: "error with ytdl and m3u8stream.",
      help: "if you know any solutions",
      help2: "open a issue on github.",
    };
    toast({
      title: "Uh oh! Something went wrong.",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(_error, null, 2)}</code>
        </pre>
      ),
    });

    /*try {
      //project has been stoped due to a error in ytdl
      //const _info = await ytdl.getInfo(url)
      //setVideo(_info)
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-red-950 p-4">
            <code className="text-white">{err}</code>
          </pre>
        ),
      });
    }*/
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Youtube downloader</h1>
        <ModeToggle />
      </div>

      <div className="flex w-full items-center space-x-2">
        <Toaster/>
        <Input placeholder="Paste Your URL..." type="text" onChange={(e) => setUrl(e.target.value)}/>
        <Button onClick={searchVideo}>
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );

}

