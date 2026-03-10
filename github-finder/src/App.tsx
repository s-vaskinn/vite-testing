import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">GitHub Finder</h1>
      <UserSearch />
    </div>
  );
};

export default App;