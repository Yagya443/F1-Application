import {
    Twitter,
    Youtube,
    Instagram,
    Github,
    ExternalLink,
} from "lucide-react";



export default function Footer() {
    return (
        <footer className="border-t border-[#1A1A1A] bg-[#050505] relative overflow-hidden">
            {/* Top accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#E10600]/40 to-transparent" />

            {/* Background elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#E10600]/3 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bottom Bar */}
                <div className="border-t border-[#1A1A1A] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-xs text-center sm:text-left">
                        © 2026 F1 Tracker. Built for informational purposes
                        only. Not affiliated with Formula 1 or FIA.
                    </p>
                </div>
            </div>
        </footer>
    );
}
