import React, { useEffect, useState } from 'react'

function Sidebar() {

  const [active, setActive] = useState(0)

  useEffect(() => {
    const menulink = document.querySelectorAll('.sidemenu h6')
    document.querySelector('.sidemenu h6:first-child').style.color = 'var(--color)'
    menulink.forEach(el => { 
      el.onclick = () => {
        menulink.forEach(el2 => el2.style.color = '')
        el.style.color = 'var(--color)'
      }
    })
  },[])

  return (
    <div className="sidebar">
      <h3><i className="fad fa-atom"></i>Reflex</h3>
      <hr/>
      <div className="spacerl"></div>

      <div className="innersidebar">
        <div className="sidemenu">
          <h6><i className="fal fa-tachometer-alt"></i>Home</h6>
          <h6><i className="fal fa-users-class"></i>My Courses</h6>
          <h6><i className="fas fa-tasks"></i>Tasks</h6>
          <h6><i class="fal fa-code-branch"></i>Projects</h6>
          <h6><i className="fal fa-badge-check"></i>Grades</h6>
          <h6><i className="fal fa-toolbox"></i>Resources</h6>
          <h6><i className="fal fa-sliders-v"></i>Settings</h6>
        </div>
        <hr/>
      </div>

      <button><i className="fal fa-plus"></i>Add Course</button>

    </div>
  )
}

export default Sidebar