


function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-800 shadow-xl sticky top-0 z-50">
      {/* الشريط العلوي المتحرك */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse"></div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* الشعار */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <span className="text-2xl">📚</span>
            </div>
            <h1 className="text-white text-xl font-bold">Lecture Site</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
