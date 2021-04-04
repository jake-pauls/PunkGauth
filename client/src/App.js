import { Counter } from "./components/Counter";

const App = () => {
  return (
    <div className='App'>
      <h1>PunkGauth</h1>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;