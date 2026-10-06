import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Welcome to PW-MARCO
      </h1>
      <p className="mt-2 text-muted-foreground">
        Platform successfully unlocked and ready.
      </p>
    </div>
  );
}
