/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
		domains: [
			"firebasestorage.googleapis.com"
		],
	},
	transpilePackages: ['three'],
};

export default nextConfig;
