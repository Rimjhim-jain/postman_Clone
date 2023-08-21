import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

//the consumer(home) is used to access the context and its data from within a component.

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
