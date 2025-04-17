const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            {children}
        </div>
    )
}

export default Layout