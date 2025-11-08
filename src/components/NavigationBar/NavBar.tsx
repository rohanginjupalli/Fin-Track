import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <ul className="flex space-x-4 justify-end items-center py-2 bg-white shadow-sm">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `px-3 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
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
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
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

export default NavBar