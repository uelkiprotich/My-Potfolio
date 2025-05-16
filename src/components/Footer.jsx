const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111317] text-gray-400 py-4 px-6 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© {year} Uel Kiprotich. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
