import { ChartNoAxesColumn, ChevronRight, Clock } from "lucide-react";

export default function PostCard({ post }) {
    return (
        <article className="flex w-full flex-col bg-white shadow-md">
            <div className="relative h-[300px]">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />

                <span
                    className="absolute left-5 top-5 rounded bg-[#E74040] px-3 py-1 text-xs font-bold text-white"
                >
                    NEW
                </span>
            </div>

            <div className="flex flex-col gap-3 px-6 pb-8 pt-6">
                <div className="flex gap-4 text-xs text-[#737373]">
                    <span className="text-[#8EC2F2]">Google</span>
                    <span>Trending</span>
                    <span>New</span>
                </div>

                <h3 className="text-xl leading-7 text-[#252B42]">
                    {post.title}
                </h3>

                <p className="text-sm leading-5 text-[#737373]">
                    {post.description}
                </p>

                <div className="flex items-center justify-between gap-2 py-3 text-xs text-[#737373]">
                    <div className="flex items-center gap-1">
                        <Clock size={16} className="text-[#23A6F0]" />
                        <span>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <ChartNoAxesColumn size={16} className="text-[#23A6F0]" />
                        <span>{post.comments} comments</span>
                    </div>
                </div>

                <button
                    type="button"
                    className="flex items-center gap-2 self-start text-sm font-bold text-[#737373]"
                >
                    Learn More
                    <ChevronRight size={20} className="text-[#23A6F0]" />
                </button>
            </div>
        </article>
    )
}