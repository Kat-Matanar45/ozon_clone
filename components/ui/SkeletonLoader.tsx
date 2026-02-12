import { cn } from "@/utils/cn"

interface Props {
    count?: number
    className?: string
}

export function SkeletonLoader({ count = 1, className }: Props) {
    return (
        <div>
            {Array.from({length: count}).map((_, index) => (
                <div 
                    key={index}
                    className={cn("animate-pulse bg-gray-300 rounded-md w-full h-48 mb-4", className)}
                />
            ))}
        </div>
    )
}