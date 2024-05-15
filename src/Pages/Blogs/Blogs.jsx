import { useEffect, useState } from "react";


const Blogs = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
      );
    
      useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode) {
          body.classList.add("dark");
        } else {
          body.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
      }, [darkMode]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div data-theme="dark" >
            <h1>All Blogs</h1>
            <div>
                <nav className="bg-gray-800 p-4">
                    <div className="flex items-center justify-between">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Logo</span>
                    </div>
                    <div className="block lg:hidden">
                        <button
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
                        onClick={() => setDarkMode(!darkMode)}
                        >
                        {darkMode ? (
                            <svg
                            className="fill-current h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"
                            />
                            </svg>
                        ) : (
                            <svg
                            className="fill-current h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM5 10a5 5 0 019.999-.001L15 10a1 1 0 112 0v.001a7 7 0 11-14 0A1 1 0 015 10z"
                            />
                            </svg>
                        )}
                        </button>
                    </div>
                    </div>
                </nav>
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Dark Mode Toggle</h1>
                    <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
                    risus non quam luctus, a lobortis odio eleifend.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
