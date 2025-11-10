import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="h-24 flex justify-between items-center py-2 px-4 bg-[#0ea5e9] shadow-sm">
      <div className="text-2xl font-bold text-white">
        Fin-Track
      </div>
      <ul className="flex space-x-4 items-center">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `px-3 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#0ea5e9]'
                  : 'text-white hover:bg-blue-200'
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="addTransaction"
            className={({ isActive }) =>
              `px-3 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#0ea5e9]'
                  : 'text-white hover:bg-blue-200'
              }`
            }
          >
            Transactions
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;