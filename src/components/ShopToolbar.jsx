import { LayoutGrid, List } from "lucide-react";

export default function ShopToolbar({ total }){
    return (
        <section aria-label="Ürün Listeleme Seçenekleri" className="px-6 py-8">
            <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-6 lg:flex-row lg:justify-between">
                <p className="text-sm font-bold text-[#737373]">
                    Showing all {total} results
                </p>

                <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#737373]">
                        Views:
                    </span>

                    <button
                        type="button"
                        aria-label="Kart Görünümü"
                        className="flex h-11 w-11 items-center justify-center rounded border border-[#ECECEC]"
                    >
                        <LayoutGrid size={18} />
                    </button>

                    <button
                        type="button"
                        aria-label="Liste Görünümü"
                        className="flex h-11 w-11 items-center justify-center rounded border border-[#ECECEC] text-[#737373]"
                    >
                        <List size={18} />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <label htmlFor="shop-sort" className="sr-only">
                        Ürün Sıralaması
                    </label>
                </div>
                
                <select
                    defaultValue="popularity"
                    id="shop-sort"
                    className="min-w-0 rounded border border-[#DDDDDD] bg-[#F9F9F9] px-4 py-3 text-sm text-[#737373]"
                >
                    <option value="popularity">Popularity</option>
                    <option value="price-asc">Fiyata Göre Artan</option>
                    <option value="price-desc">Fiyata Göre Azalan</option>
                </select>

                <button
                    type="button"
                    className="rounded bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white"
                >
                    Filter
                </button>
            </div>
        </section>
    )
}