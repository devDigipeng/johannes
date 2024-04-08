/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['127.0.0.1', 'cdn.sanity.io', 'johannes.ng'],
        unoptimized: true 
    },
};

export default nextConfig;
