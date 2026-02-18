interface ColorCircleProductProps {
    color: string;
}

export default function ColorCircleProduct({ color }: ColorCircleProductProps) {
    return <div className={`w-6 h-6 ${color} rounded-full border border-gray-200`} />;
}
