/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/hvlhasanka/noon-entry_coding_exercise/main/Workspace/dummy-data-assets/images/profile-images/**/*.png",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/hvlhasanka/noon-entry_coding_exercise/main/Workspace/dummy-data-assets/images/post-images/**/*.jpg",
      },
    ],
  },
}

module.exports = nextConfig
