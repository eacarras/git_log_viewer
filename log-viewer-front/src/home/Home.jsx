import { useState, useEffect } from 'react';


const Home = () => {
  const [owner, setOwner] = useState("eacarras")
  const [repository, setRepository] = useState("git_log_viewer")

  const [, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  // Custom function
  const search = () => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}github_api/repo/logs/?repository=${repository}&owner=${owner}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.data) {
          setData([])
          alert(data.err || "Not data found or rate limit exceeded")
        } else {
          setData(data.data)
        }
      })
      .catch((err) => console.error("Error trying to load the data", err))
      .finally(() => setIsLoading(false))
  }

  // Hooks
  useEffect(search, [])

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
            <input
              className='flex-1 border border-black rounded-md p-1'
              onChange={(e) => setOwner(e.target.value)}
              type="text"
              value={owner} />
          </div>

          <div className='flex flex-row gap-2 items-center'>
            <p className='w-40 text-base'>Repository name</p>
            <input
              className='flex-1 border border-black rounded-md p-1'
              onChange={(e) => setRepository(e.target.value)}
              type="text"
              value={repository} />
          </div>

          <button onClick={search} className='border border-black rounded font-bold py-1' type="button">Search</button>
        </div>

        {/* Viewer logs */}
        <h3 className='text-xl font-bold mt-16 mb-6'>Viewer log</h3>
        <div className='flex flex-col gap-5'>
          {data.map((e, idx) => (
            <aside className='border border-black rounded-lg p-4' key={`idx-${idx}-${e.commit.message}`}>
              {/* Body of cards */}
              <div className='flex flex-col gap-2'>
                <a className='font-bold' target="_blank" rel="noopener noreferrer" href={e.link}>{e.commit.message}</a>
                <div className='flex flex-row gap-2'>
                  <img className='rounded-full w-6 h-6' alt={`avatar-user-${idx}-${e.commit.message}`} src={e.author.avatar} />
                  <span>{e.author.user}</span>
                </div>
              </div>
            </aside>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Home
