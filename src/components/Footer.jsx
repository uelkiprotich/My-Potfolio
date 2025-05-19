const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111317] text-gray-400 py-8 px-6 text-sm">
      <div className="w-full max-w-full px-4 md:px-8">
        <p>© {year} Uel Kiprotich. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
