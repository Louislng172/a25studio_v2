/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
  /*   webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.worker\.ts$/,
                use: { loader: 'worker-loader', options: { inline: true } },
            });
        }
        return config;
    }, */
};

export default nextConfig;
