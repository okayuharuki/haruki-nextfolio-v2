export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm tracking-widest">&copy; {currentYear} HARUKI. All rights reserved.</p>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a
            href="https://github.com/okayuharuki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
