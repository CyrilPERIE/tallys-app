import { cn } from "@/lib/utils";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={cn("text-center text-sm py-4 rounded-t-xl shadow-sm", className)}>
            <p>E-PMU</p>
        </footer>
    );
}
