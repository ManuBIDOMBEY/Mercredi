import React from 'react'
import SideBar.css from 'SideBar.css'

function SideBar() {
  return (
    <div>
        <ul>
            <li>
            <div> <img className='logo' src="logoacceuil.png" alt="" /><button>Acceuil</button></div>
            </li>
            <li>
            <div> <img className='logo' src="logoprofil.png" alt="" /><button>Profil</button></div>
            </li>
            <li>
            <div> <img className='logo' src="logoform.png" alt="" /><button>Form</button></div>
            </li>
        </ul>
    </div>
  )
}

export default SideBar