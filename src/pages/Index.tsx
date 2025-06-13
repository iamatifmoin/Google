
import { Grid3X3 } from "lucide-react";
import { useState } from "react";
import GoogleLogo from "../components/GoogleLogo";
import SearchBox from "../components/SearchBox";
import GoogleAppsMenu from "../components/GoogleAppsMenu";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";

const Index = () => {
  const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false);

  const handleGoogleSearch = () => {
    const query = (document.querySelector('input[type="text"]') as HTMLInputElement)?.value || "";
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  const handleImFeelingLucky = () => {
    const query = (document.querySelector('input[type="text"]') as HTMLInputElement)?.value || "";
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col transition-colors">
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-sm">
        <div className="flex space-x-4">
          <a 
            href="https://about.google/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:underline transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="https://store.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:underline transition-colors cursor-pointer"
          >
            Store
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://gmail.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:underline transition-colors cursor-pointer"
          >
            Gmail
          </a>
          <a 
            href="https://images.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:underline transition-colors cursor-pointer"
          >
            Images
          </a>
          <DarkModeToggle />
          <div className="relative">
            <button 
              onClick={() => setIsAppsMenuOpen(!isAppsMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
              aria-label="Google apps"
            >
              <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <GoogleAppsMenu isOpen={isAppsMenuOpen} onClose={() => setIsAppsMenuOpen(false)} />
          </div>
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors cursor-not-allowed opacity-75"
            disabled
          >
            Sign in
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 -mt-16">
        <div className="text-center max-w-lg w-full">
          <GoogleLogo />
          <div className="mt-8">
            <SearchBox />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={handleGoogleSearch}
              className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 text-gray-700 dark:text-gray-200 px-5 py-3 rounded-md font-medium transition-all hover:shadow-sm cursor-pointer"
            >
              Google Search
            </button>
            <button 
              onClick={handleImFeelingLucky}
              className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 text-gray-700 dark:text-gray-200 px-5 py-3 rounded-md font-medium transition-all hover:shadow-sm cursor-pointer"
            >
              I'm Feeling Lucky
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            Google offered in: 
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=hi" className="text-blue-600 hover:underline ml-3 cursor-pointer">हिन्दी</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=bn" className="text-blue-600 hover:underline ml-3 cursor-pointer">বাংলা</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=te" className="text-blue-600 hover:underline ml-3 cursor-pointer">తెలుగు</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=mr" className="text-blue-600 hover:underline ml-3 cursor-pointer">मराठी</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=ta" className="text-blue-600 hover:underline ml-3 cursor-pointer">தமிழ்</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=gu" className="text-blue-600 hover:underline ml-3 cursor-pointer">ગુજરાતી</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=kn" className="text-blue-600 hover:underline ml-3 cursor-pointer">ಕನ್ನಡ</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=ml" className="text-blue-600 hover:underline ml-3 cursor-pointer">മലയാളം</a>
            <a href="https://www.google.com/setprefs?sig=0_rWOGVgfH5Mh1tGhp8_nxiF4%3D&hl=pa" className="text-blue-600 hover:underline ml-3 cursor-pointer">ਪੰਜਾਬੀ</a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
