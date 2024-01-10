
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold ">Git Log Viewer App</h1>
      </header>
      
      <aside>
        {/* Section of inputs */}
        <div>
          <div>
            <p>Owner</p>
            <input type="text" />
          </div>

          <div>
            <p>Repository name</p>
            <input type="text" />
          </div>

          <div>
            <p>Token (if apply)</p>
            <input type="text" />
          </div>
        </div>

        {/* Viewer logs */}
        <div>Viewer log</div>
      </aside>
    </div>
  );
}

export default Home
