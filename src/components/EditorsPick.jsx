import { Link } from "react-router-dom";

export default function EditorsPick() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-20">
      <div className="mx-auto flex max-w-[1050px] flex-col gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-[#252B42]">
            EDITOR’S PICK
          </h2>

          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <Link
          to="/shop"
          className="relative block h-[500px] w-full overflow-hidden"
        >
          <img
            src="/images/category-men.jpg"
            alt="Erkek giyim koleksiyonu"
            className="h-full w-full object-cover"
          />

          <span className="absolute bottom-6 left-6 bg-white px-12 py-3 text-base font-bold text-[#252B42]">
            MEN
          </span>
        </Link>
      </div>
    </section>
  );
}