function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 pb-4 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Branding */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold text-white mb-2">FinanceDash</h2>
          <p className="text-sm mb-4">Track budget. Visualize analytics. Take control of your finances.</p>
          <div className="flex space-x-4 mt-2">
            {/* Social Media Icons */}
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
              <svg width="24" height="24" fill="currentColor"><path d="..."/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-400">
              <svg width="24" height="24" fill="currentColor"><path d="..."/></svg>
            </a>
            {/* Add other icons as you wish */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-400">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-400">Transactions</a></li>
            <li><a href="#" className="hover:text-blue-400">Categories</a></li>
            <li><a href="#" className="hover:text-blue-400">Analytics</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-2">Resources</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-400">Docs</a></li>
            <li><a href="#" className="hover:text-blue-400">API Reference</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-2">Contact</h3>
          <ul>
            <li>Email: <a href="mailto:example@email.com" className="hover:text-blue-400">example@email.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1234567890</a></li>
          </ul>
        </div>
      </div>
      {/* Lower bar */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FinanceDash. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
