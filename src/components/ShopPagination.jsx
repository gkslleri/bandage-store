export default function ShopPagination() {
  return (
    <nav
      aria-label="Ürün sayfaları"
      className="flex justify-center px-6 pb-12"
    >
      <div className="flex overflow-hidden rounded border border-[#BDBDBD] text-sm font-bold">
        <button
          type="button"
          disabled
          className="border-r border-[#BDBDBD] bg-[#F3F3F3] px-4 py-5 text-[#BDBDBD]"
        >
          First
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            type="button"
            aria-current={page === 1 ? "page" : undefined}
            className={`border-r border-[#BDBDBD] px-4 py-5 ${
              page === 1
                ? "bg-[#23A6F0] text-white"
                : "bg-white text-[#23A6F0]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          className="bg-white px-4 py-5 text-[#23A6F0]"
        >
          Next
        </button>
      </div>
    </nav>
  );
}