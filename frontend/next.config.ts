import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // output: "standalone",
    reactStrictMode: true,
    images: {
        unoptimized: true,
        loader: "default",
        minimumCacheTTL: 60 * 60 * 24 * 1, // Cache de 7 dias
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imgprodutos.s3.us-east-2.amazonaws.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/login",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
