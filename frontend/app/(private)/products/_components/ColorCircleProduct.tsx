export default function ColorCircleProduct({ color }: { color: string }) {
    return <div className={`w-6 h-6 ${color} rounded-full border border-gray-200`} />;
}
