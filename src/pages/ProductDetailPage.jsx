import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <section className="px-6 py-12">
      <div className="mx-auto flex max-w-[1050px] flex-col gap-4">
        <h1 className="text-2xl font-bold text-[#252B42]">
          Product Detail
        </h1>

        <p>Seçilen ürünün ID değeri: {id}</p>
      </div>
    </section>
  );
}