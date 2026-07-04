import {
    Twitter,
    Youtube,
    Instagram,
    Github,
    ExternalLink,
    Bot,
} from "lucide-react";

export default function Footer() {

    return (
            <footer className=" relative overflow-hidden">
             
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Bottom Bar */}
                    <div className=" py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-xs text-center sm:text-left">
                            © 2026 F1 Tracker. Built for informational purposes
                            only. Not affiliated with Formula 1 or FIA.
                        </p>
                    </div>
                </div>
            </footer>

            
    );
}
