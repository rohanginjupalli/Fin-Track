import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="h-24 flex justify-between items-center py-2 px-4 bg-white shadow-sm">
      <div className="text-2xl font-bold text-Gray-600">
        Fin-Track
      </div>
      <ul className="flex space-x-4 items-center">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `px-3 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-yellow-500 text-white'
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
                  ? 'bg-yellow-500 text-white'
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