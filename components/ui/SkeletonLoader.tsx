interface Props {
    count?: number
}

export function SkeletonLoader({ count = 1 }: Props) {
    return (
        <div>
            {Array.from({length: count}).map((_, index) => (
                <div 
                    key={index}
                    className="animate-pulse bg-gray-300 rounded-md w-full h-48 mb-4"
                >
                </div>
            ))}
        </div>
    )
}