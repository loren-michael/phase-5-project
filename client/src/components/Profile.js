import React from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'


const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.sessions.currentUser);
  const userItems = user.items;
  console.log(user)

  function handleFormNav () {
    navigate('/new_item')
  }

  return (
    <div>
      <NavBar />
      <div>
        <div class="max-w-2/4 p-2 font-sans text-2xl font-semibold text-center">
          {user.username}'s Profile
        <div></div>
        </div>
          <div class="max-w-2/4 pt-6 p-2 font-sans text-xl font-semibold text-center">
            {user.username}'s Listed Items
            {
              userItems.length > 0 ?
                <div>
                  {userItems.map(item => {
                    return (
                      <div class="p-3 mb-3 w-9/12 m-auto bg-slate-200 rounded border-2 border-black">
                        <div class="text-lg text-left">
                          {item.title}
                        </div>
                        <div class="text-lg text-right">
                        <NavLink to="/profile" href="/profile" class="font-sans text-lg text-black">Go To Listing</NavLink>
                        </div>
                      </div>
                    )
                  })}
                </div>
              :
                <div class="pt-4">
                  
                </div>
              }
              <button onClick={() => handleFormNav()} class="inset-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Create Listing</button>
            </div>
      </div>
    </div>
  )
}

export default Profile