import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
      <h1 className='text-6xl mb-4 mb-20'>Search GitHub Users</h1>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
