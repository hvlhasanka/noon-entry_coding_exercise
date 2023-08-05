import config from "@/configs/development";

const { baseUrl } = config;

const Home = () => {
  return (
    <>
      <a href={`${baseUrl}/post-feed`}>Head to Post feed</a>
      <br />
      <a href={`${baseUrl}/favorite-posts`}>Head to Favorite posts</a>
    </>
  );
}

export default Home;
