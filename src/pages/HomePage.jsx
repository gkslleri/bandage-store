import heroWoman from '../assets/hero-woman.jpg';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center gap-8 bg-[#96E9FB] px-6 py-16 text-center">
        <p className="text-base font-bold tracking-widest text-[#252B42]">
            SUMMER 2020
        </p>

        <h2 className="text-4xl font-bold leading-tight text-[#252B42]">
            NEW COLLECTION
        </h2>

        <p className="max-w-xs text-xl text-[#737373]">
            We know how large objects will act,
            but things on a small scale.
        </p>

        <button
            type="button"
            className="rounded bg-[#2DC071] px-10 py-4 text-xl font-bold text-white"
        >
            SHOP NOW
        </button>

        <img 
            src={heroWoman}
            alt="Yaz koleksiyonundan kıyafetler giyen ve alışveriş çantaları taşıyan kadın"
            className='h-96 w-full object-cover object-[75%_center]'
        />
    </section>
  );
}