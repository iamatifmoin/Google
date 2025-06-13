
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="px-8 py-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="text-center sm:text-left">
          India
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 px-8 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <a 
              href="https://ads.google.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Advertising
            </a>
            <a 
              href="https://www.google.com/services/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Business
            </a>
            <a 
              href="https://www.google.com/search/howsearchworks/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              How Search works
            </a>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Privacy
            </a>
            <a 
              href="https://policies.google.com/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Terms
            </a>
            <button className="hover:underline cursor-not-allowed opacity-75">
              Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
