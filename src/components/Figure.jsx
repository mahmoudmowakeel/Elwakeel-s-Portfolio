import AnimatedArrow from "./AnimatedArrow";

function Figure({ title, bio, imgUrl, name, hasButton, children, pLink }) {
  return (
    <figure
      className={`flex flex-col md:flex-row-reverse gap-10 px-7 pt-5 ${
        hasButton ? "py-14" : ""
      }  border-b-2 border-trans/30`}
    >
      <img
        src={imgUrl}
        alt={name}
        className="w-[70%] mx-auto md:w-[25%] h-[150px] rounded-lg  shadow-lg"
      />
      <figcaption>
        <h2 className="text-sm md:text-lg font-bold mb-7  grid grid-cols-5 md:grid-cols-7 ">
          <span>
            <AnimatedArrow />
          </span>
          <span className="col-span-3 md:col-span-6">{title}</span>
        </h2>
        {children}
        <p className="text-sm md:text-lg tracking-wide font-semibold text-trans mb-7">
          {bio}
        </p>
        <button className={`${hasButton ? "" : "hidden"}`}>
          <a
            className="bg-main text-white px-7 py-2 font-semibold tracking-wider rounded-lg"
            href={pLink}
            target="_blank"
            rel="noreferrer"
          >
            Try It
          </a>
        </button>
      </figcaption>
    </figure>
  );
}

export default Figure;
