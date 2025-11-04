import AddProject from "./components/AddProject";

function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Product Manager</h1>
      <main className="h-screen my-8 flex gap-8">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          YOUR PROJECTS
          <AddProject />
        </aside>
      </main>
    </>
  );
}

export default App;
