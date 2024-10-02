// import ThemeToggle from "./theme/ThemeToggle.tsx";

const TopNav = () => {
    const NavButton = ({text, icon}: { text: string, icon: JSX.Element }) => {
        // white, transparent button, rounded corners, with an icon on the right. All centered vertically. Minimal shadow
        return (
            <button
                className="flex items-center px-4 py-2 bg-white text-gray-600 rounded-md border border-gray-200 hover:bg-gray-100 transition">
                {text}
                <span className="ml-2">{icon}</span>
            </button>
        );
    }

    return (
        <div className="flex justify-between items-center bg-white p-6 shadow-md h-16">
            {/* User Info */}
            <div className="flex items-center space-x-4">
                <NavButton
                    text="Add Assessment"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    }
                />
            </div>

            {/* Right side summary */}
            <div className="flex w-1/2 items-center space-x-4">
                {/* Horizontal meter showing patients assessed. Text below it saying "XX / XXX patients seen" */}
                <div className="flex flex-col items-start justify-center space-y-1 flex-grow">
                    <div className="flex justify-start bg-gray-200 w-10/12 h-2 rounded-full">
                        <div className="bg-purple-500 h-2 w-5/12 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-500">20 / 100 patients seen</p>
                </div>

                <div>
                    <p className="text-sm font-semibold">Sandra Mwai</p>
                    <p className="text-xs text-gray-500">sandramwai@caveasy.com</p>
                </div>

                {/* Profile image */}
                <img
                    src="https://i.pravatar.cc/300"
                    alt="User Avatar" className="w-10 h-10 rounded-full"/>
            </div>
        </div>
    );
};

export default TopNav;
