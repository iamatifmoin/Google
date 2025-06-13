
import { Search, Mic, Camera } from "lucide-react";
import { useState } from "react";

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchValue)}`, '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleVoiceSearch = () => {
    // Check if browser supports speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        console.log('Voice recognition started');
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearchValue(transcript);
        console.log('Voice recognition result:', transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Voice recognition error:', event.error);
      };

      recognition.start();
    } else {
      alert('Speech recognition not supported in this browser');
    }
  };

  const handleImageSearch = () => {
    // Create a hidden file input for image upload
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        // In a real implementation, you would upload the image and search
        // For now, we'll just redirect to Google Images
        window.open('https://images.google.com/', '_blank');
      }
    };
    
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  return (
    <div className="relative max-w-lg mx-auto">
      <div className={`
        flex items-center w-full h-12 px-4 border rounded-full
        transition-all duration-200 hover:shadow-md
        ${isFocused 
          ? 'shadow-md border-transparent dark:shadow-gray-700' 
          : 'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'
        }
        bg-white dark:bg-gray-800
      `}>
        <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          className="flex-1 outline-none text-gray-700 dark:text-gray-200 bg-transparent"
          placeholder=""
          autoComplete="off"
          spellCheck="false"
        />
        <div className="flex items-center space-x-3 ml-3">
          <button 
            onClick={handleVoiceSearch}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
            aria-label="Search by voice"
          >
            <Mic className="w-5 h-5 text-blue-500" />
          </button>
          <button 
            onClick={handleImageSearch}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
            aria-label="Search by image"
          >
            <Camera className="w-5 h-5 text-blue-500" />
          </button>
        </div>
      </div>
      
      {/* Search suggestions dropdown would appear here when typing */}
      {isFocused && searchValue && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg mt-1 py-2 z-50">
          <div 
            onClick={() => {
              setSearchValue(searchValue);
              handleSearch();
            }}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-200"
          >
            <div className="flex items-center">
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-3" />
              {searchValue}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
