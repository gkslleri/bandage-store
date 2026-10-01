export default function ProductCard({ product }) {
  return (
    <article className="flex h-[427px] w-full items-center justify-center overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="object-contain w-full h-full"
      />

      <div className="flex flex-col items-center gap-3 px-6 py-6 text-center">
        <h3 className="text-base font-bold text-[#252B42]">
          {product.name}
        </h3>

        <p className="text-sm font-bold text-[#737373]">
          {product.department}
        </p>

        <div className="flex items-center gap-2 font-bold">
          <span className="text-[#BDBDBD]">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-[#23856D]">
            ${product.discountPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
}