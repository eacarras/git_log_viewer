import { useState } from 'react';


const Home = () => {
  const [token, setToken] = useState("")
  const [owner, setOwner] = useState("eacarras")
  const [repository, setRepository] = useState("git_log_viewer")

  return (
    <div className="flex flex-col p-6">
      <header className="App-header">
        <h1 className="text-3xl font-bold">Git Log Viewer App</h1>
      </header>
      
      <aside className='flex flex-col'>
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

          <div className='flex flex-row gap-2 items-center'>
            <p className='w-40 text-base'>Token (if apply)</p>
            <input className='flex-1 border border-black rounded-md p-1' type="text" value={token} />
          </div>
        </div>

        {/* Viewer logs */}
        <div className='mt-16'>
          Viewer log
        </div>
      </aside>
    </div>
  );
}

export default Home
