export default function ProductCard({ product, imageHeight = "h-[427px]", imageFit = "object-contain" }) {
  return (
    <article className="flex w-full flex-col bg-white">
      <div className={`flex h-[427px] w-full shrink-0 items-center justify-center overflow-hidden bg-[#FAFAFA] ${imageHeight}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-contain ${imageFit}`}
        />
      </div>

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

        <div
          role="img"
          aria-label="Renk seçenekleri: mavi, yeşil, turuncu ve lacivert"
          className="flex items-center gap-2"
        > 
          <span className="h-4 w-4 rounded-full bg-[#23A6F0]" />
          <span className="h-4 w-4 rounded-full bg-[#23856D]" />
          <span className="h-4 w-4 rounded-full bg-[#E77C40]" />
          <span className="h-4 w-4 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </article>
  );
}