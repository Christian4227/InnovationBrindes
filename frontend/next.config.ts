import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // output: "standalone",
    reactStrictMode: true,
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
