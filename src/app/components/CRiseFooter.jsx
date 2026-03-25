// Simple icons for footer
function TwitterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4.01c-.77.34-1.6.57-2.46.68a4.3 4.3 0 001.88-2.37 8.57 8.57 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 3.86a4.27 4.27 0 001.33 5.71 4.25 4.25 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.58 8.58 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.54 12.2-12.21 0-.19 0-.37-.01-.56A8.72 8.72 0 0022 4.01z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1 1 0 100 2 1 1 0 000-2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 3a2 2 0 100 4 2 2 0 000-4zm0 6h4v12H4V9zm6 0h4v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.9V21h-4v-6.5c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21h-4V9z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.615 3.184a2.998 2.998 0 012.121 2.121C22 6.9 22 12 22 12s0 5.1-.264 6.695a2.998 2.998 0 01-2.121 2.121C18.4 21 12 21 12 21s-6.4 0-7.615-.184a2.998 2.998 0 01-2.121-2.121C2 17.1 2 12 2 12s0-5.1.264-6.695a2.998 2.998 0 012.121-2.121C5.6 3 12 3 12 3s6.4 0 7.615.184zM10 15l6-3-6-3v6z"/>
    </svg>
  );
}

// CRiseFooter component
export function CRiseFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CRise
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Manage and monitor your CRises efficiently with powerful analytics and insights.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <TwitterIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <InstagramIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <LinkedInIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-purple-600 flex items-center justify-center transition-colors group">
                <YouTubeIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Product, Resources, Company sections remain the same */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">CRise Templates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 CRise. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}