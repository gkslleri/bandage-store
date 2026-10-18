
const brands = [
    {id: 1, name:"Hooli", image: "/images/brands/hooli.png"},
    {id: 2, name:"Lyft", image: "/images/brands/lyft.png"},
    {id: 3, name:"Vector", image: "/images/brands/Vector.png"},
    {id: 4, name:"Stripe", image: "/images/brands/stripe.png"},
    {id: 5, name:"Aws", image: "/images/brands/aws.png"},
    {id: 6, name:"Reddit", image: "/images/brands/reddit.png"}
]

export default function BrandLogos() {
  return (
    <section
      aria-label="Markalar"
      className="bg-[#FAFAFA] px-6 py-12"
    >
      <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex h-20 w-36 items-center justify-center"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}