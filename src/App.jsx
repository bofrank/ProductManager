import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        <NewProject visibility="visible" />
        <div>
          <p className="flex flex-col gap-1 my-4">
            No Project Selected
          </p>
          <p className="flex flex-col gap-1 my-4">
            Select a project or get started with a new one
          </p>
          <button className="text-stone-800 hover:text-stone-950">
            Create new project
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
