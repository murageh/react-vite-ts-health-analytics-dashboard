const MainSidebar = () => {

    const Button = ({children}: { children: React.ReactNode }) => {
        return (
            <button
                className="w-10 h-10 flex items-center justify-center rounded-md text-white bg-gray-800 hover:bg-purple-500">
                {children}
            </button>
        );
    }

    return (
        <div className="w-16 h-screen bg-white shadow-lg flex flex-col items-center justify-center py-4 space-y-4">
            {/* Sidebar icons */}
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
        </div>
    );
};

export default MainSidebar;