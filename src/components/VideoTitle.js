const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-52 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold w-1/4">{title}</h1>
      <p className="py-5 text-lg w-1/3"> {overview}</p>
      <div>
        <button className=" bg-white text-black p-3 px-10 text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
