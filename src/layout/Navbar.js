function Navbar() {
  return (
    <header className="text-black-900 body-font">
      <div className="container mx-auto flex p-5 items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 mb-0">
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5">Home</a>
          <a className="mr-5">About</a>
          <a className="mr-5">Services</a>
          <a className="mr-5">Privacy Policy</a>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
