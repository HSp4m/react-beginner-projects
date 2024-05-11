import { CreateRegisterForm } from "./components/create-register-form"
import { ModeToggle } from "./components/mode-toggle"
import { useState } from "react";
import { CreateLoginForm } from "./components/create-login-form";

export function App() {

  const [usingLogin, setUsingLogin] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{!usingLogin ? <>Register</> : <>Login</>}</h1>
        <ModeToggle />
      </div>

      <div className="space-y-6">
        {!usingLogin ? (
          <CreateRegisterForm
            onClick={() => {
              setUsingLogin(!usingLogin);
            }}
          />
        ) : (
          <CreateLoginForm
            onClick={() => {
              setUsingLogin(!usingLogin);
            }}
          />
        )}
      </div>
    </div>
  );
}
