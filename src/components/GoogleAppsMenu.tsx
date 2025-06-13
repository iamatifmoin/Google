
import { useEffect, useRef } from "react";

interface GoogleAppsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleAppsMenu = ({ isOpen, onClose }: GoogleAppsMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const apps = [
    { name: "Account", icon: "👤", color: "bg-blue-500", url: "https://myaccount.google.com/" },
    { name: "Search", icon: "🔍", color: "bg-red-500", url: "https://www.google.com/" },
    { name: "Maps", icon: "🗺️", color: "bg-green-500", url: "https://maps.google.com/" },
    { name: "YouTube", icon: "📺", color: "bg-red-600", url: "https://youtube.com/" },
    { name: "Play", icon: "▶️", color: "bg-green-600", url: "https://play.google.com/" },
    { name: "News", icon: "📰", color: "bg-blue-600", url: "https://news.google.com/" },
    { name: "Gmail", icon: "📧", color: "bg-red-400", url: "https://gmail.com/" },
    { name: "Meet", icon: "📹", color: "bg-green-400", url: "https://meet.google.com/" },
    { name: "Chat", icon: "💬", color: "bg-green-500", url: "https://chat.google.com/" },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg p-4 z-50 w-80"
    >
      <div className="grid grid-cols-3 gap-4">
        {apps.map((app) => (
          <button
            key={app.name}
            onClick={() => window.open(app.url, '_blank')}
            className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group cursor-pointer"
          >
            <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center text-white text-xl mb-2 group-hover:scale-105 transition-transform`}>
              {app.icon}
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-200">{app.name}</span>
          </button>
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-600 mt-4 pt-4">
        <button 
          onClick={() => window.open('https://about.google/products/', '_blank')}
          className="text-sm text-blue-600 hover:underline cursor-pointer"
        >
          More from Google
        </button>
      </div>
    </div>
  );
};

export default GoogleAppsMenu;
