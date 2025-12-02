import { Loader2 } from "lucide-react";

const LoadingFallback = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-light">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-accent" />
                <p className="text-sm font-medium text-black/60">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingFallback;
