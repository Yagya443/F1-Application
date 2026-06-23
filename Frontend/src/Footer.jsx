import { Twitter, Youtube, Instagram, Github, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

const footerLinks = {
  'Races': ['Schedule', 'Results', 'Live Timing', 'Circuit Guide'],
  'Drivers': ['Standings', 'Profiles', 'Statistics', 'History'],
  'Teams': ['Constructors', 'Car Gallery', 'Technical', 'Engine Data'],
  'More': ['About F1', 'Regulations', 'Privacy Policy', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#050505] relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E10600]/40 to-transparent" />

      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#E10600]/3 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#E10600] rounded flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-xs tracking-tighter">F1</span>
              </div>
              <span className="text-white font-bold tracking-widest uppercase text-sm">
                F1 <span className="text-[#E10600]">Tracker</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Your premium destination for Formula 1 race tracking, standings, and real-time results.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1A1A1A] bg-[#0F0F0F] text-gray-500 hover:text-white hover:border-[#E10600]/40 hover:bg-[#E10600]/5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1A1A] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © 2026 F1 Tracker. Built for informational purposes only.{' '}
            <span className="text-gray-700">Not affiliated with Formula 1 or FIA.</span>
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms</a>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
