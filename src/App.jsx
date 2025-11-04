import AddProject from "./components/AddProject";
import ProjectForm from "./components/ProjectForm";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Product Manager</h1>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        <main className="h-screen my-8 flex gap-8">
          <p className="flex flex-col gap-1 my-4">
            No Project Selected
          </p>
          <p className="flex flex-col gap-1 my-4">
            Select a project or get started with a new one
          </p>
          <button className="text-stone-800 hover:text-stone-950">
            Create new project
          </button>
        </main>
      </main>
      <div>
        <ProjectForm visibility="invisible" />
      </div>
    </>
  );
}

export default App;
