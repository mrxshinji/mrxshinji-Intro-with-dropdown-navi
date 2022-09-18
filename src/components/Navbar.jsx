import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

// =============================== Navbar Section ===============================
import { ReactComponent as IconMenu } from '../images/icon-menu.svg';
import { ReactComponent as UpIcon } from '../images/icon-arrow-up.svg';
import { ReactComponent as DownIcon } from '../images/icon-arrow-down.svg';
import { ReactComponent as CloseMenu } from '../images/icon-close-menu.svg';
import { ReactComponent as TodoIcon } from '../images/icon-todo.svg';
import { ReactComponent as CalendarIcon } from '../images/icon-calendar.svg';
import { ReactComponent as ReminderIcon } from '../images/icon-reminders.svg';
import { ReactComponent as PlanningIcon } from '../images/icon-planning.svg';

// =============================== Navbar Section ===============================

export default function Navbar() {
    return (
      <nav className="navbar">
        <NavMenu>
          <NavItem title="Features" icon={true}>
            <NavbarDropdown listName="features" />
          </NavItem>
          <NavItem title="Company" icon={true}>
            <NavbarDropdown listName="company" />
          </NavItem>
          <NavItem title="Careers" icon={false} />
          <NavItem title="About" icon={false} />
        </NavMenu>
        <NavBtn icon={<IconMenu />} /> 
      </nav>
    )
  }
  
  // ul that take li as children
  function NavMenu(props) {
    return (
      <ul id="nav-menu" className="navbar-nav">
        {props.children}
      </ul>
    )
  }
  
  function NavItem(props) {
    // toggle open and close items
    const [open, setOpen] = useState(false);
    // toggle up 
    const [dropIcon, setDropIcon] = useState(false);
    function toggleOpen() {
      setOpen(prev => !prev);
      setDropIcon(prev =>!prev);
    }
  
    return (
      <li className="nav-item">
        <a href={props.link} className="dropdown-button" onClick={toggleOpen}>
          {props.title} {props.icon && (dropIcon ? <UpIcon /> : <DownIcon />)}
        </a>

        {/* Similar to toggle && {props.children} */}
        { props.icon && <CSSTransition 
            in={open}
            timeout={200}
            classNames="drop"
            unmountOnExit
        >
            {props.children}
        </CSSTransition>
        }
      </li>
    );
  }
  
  // /* =============================== SideBar Section =============================== */
  // Collapsible item to open sidebar
  function NavBtn() {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
      setToggle(prev => !prev)
    }
    
    // Sidebar 
    function Sidebar(props) {
        return (
        <div className='sidebar'>
            <button id="side-btn" className="toggleBtn" title="Close Sidebar" onClick={props.toggle}>{<CloseMenu />}</button>
            <ul className='sidebar-ul'>
            <NavItem title="Features" icon={true}>
                <SidebarDropdown listName="features" />
            </NavItem>
            <NavItem title="Company" icon={true}>
                <SidebarDropdown listName="company" />
            </NavItem>
            <NavItem title="Careers" icon={false} />
            <NavItem title="About" icon={false} />
            </ul>
        </div>
        )
    }
  
    return (
      <div className="nav-sidebar">
        <button id="nav-btn" title="Open Sidebar" className="toggleBtn" onClick={handleToggle}>{<IconMenu />} </button>

        {/* Similar to toggle && <Sidebar /> */}
        <CSSTransition 
            in={toggle}
            timeout={200}
            classNames="slide"
            unmountOnExit
            >
        <Sidebar
            toggle={handleToggle}
        />
        </CSSTransition>
      </div>
    )
  }
  /* =============================== SideBar Section =============================== */
  
  
  /* =============================== Dropdown Section =============================== */
  // Sidebar item dropdown
  function SidebarDropdown(props) {
    const list = props.listName
    if (list === "features") {
      return (
        <div>
        <ul className="dropbar">
          <DropdownItem icon={<TodoIcon />} title="Todo List" />
          <DropdownItem icon={<CalendarIcon />} title="Calendar" />
          <DropdownItem icon={<ReminderIcon />} title="Reminders" />
          <DropdownItem icon={<PlanningIcon />} title="Planning" />
        </ul>
        </div>
      )
    }
    if (list === "company") {
      return (
        <ul className="dropbar">
          <DropdownItem link="#" title="History" />
          <DropdownItem link="#" title="Our Team" />
          <DropdownItem link="#" title="Blog" />
      </ul>
      )
    }
  }
  
  // Navbar item dropdown , separated due to position and absolute
  function NavbarDropdown(props) {
    const list = props.listName
    if (list === "features") {
      return (
        <div className='nav-drop'>
          <ul className="dropbar">
            <DropdownItem icon={<TodoIcon />} title="Todo List" />
            <DropdownItem icon={<CalendarIcon />} title="Calendar" />
            <DropdownItem icon={<ReminderIcon />} title="Reminders" />
            <DropdownItem icon={<PlanningIcon />} title="Planning" />
          </ul>
        </div>
      )
    }
    if (list === "company") {
      return (
        <div className='nav-drop'>
          <ul className="dropbar">
            <DropdownItem link="#" title="History" />
            <DropdownItem link="#" title="Our Team" />
            <DropdownItem link="#" title="Blog" />
          </ul>
      </div>
      )
    }
  }
  
  function DropdownItem(props) {
    return (
    <li className="dropdown-side">
      <a href={props.link} className="dropdown-item">
        {props.icon}{props.title}
      </a>
    </li>
    )
  }
  
  /* =============================== Dropdown Section =============================== */