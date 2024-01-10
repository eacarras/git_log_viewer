import { useState, useEffect } from 'react';


const Home = () => {
  const [owner, setOwner] = useState("eacarras")
  const [repository, setRepository] = useState("git_log_viewer")

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  // Hooks
  useEffect(() => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}github_api/repo/logs/?repository=${repository}&owner=${owner}`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((err) => console.error("Error trying to load the data", err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="flex flex-col p-6">
      <header className="App-header">
        <h1 className="text-3xl font-bold">Git Log Viewer App</h1>
      </header>
      
      <aside className='flex flex-col px-12 mt-6'>
        {/* Section of inputs */}
        <h3 className='text-xl font-bold mt-6'>Custom forms</h3>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-2 items-center'>
            <p className='w-40 text-base'>Owner</p>
            <input className='flex-1 border border-black rounded-md p-1' type="text" value={owner} />
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <p className='w-40 text-base'>Repository name</p>
            <input className='flex-1 border border-black rounded-md p-1' type="text" value={repository} />
          </div>
        </div>

        {/* Viewer logs */}
        <h3 className='text-xl font-bold mt-16 mb-6'>Viewer log</h3>
        <div className='flex flex-col gap-5'>
          {data.map((e, idx) => (
            <div key={`idx-${idx}-${e.commit.message}`}>{e.commit.message}</div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Home
