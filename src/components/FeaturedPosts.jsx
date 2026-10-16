import PostCard from "./PostCard"

const posts = [
    {
        id: 1,
        image: "/images/alt-1.jpg",
        title: "Loudest à la Madison #1 (L’integral)",
        description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: "22 April 2021",
        comments: 10
    },
    {
        id: 2,
        image: "/images/alt-2.jpg",
        title: "Loudest à la Madison #1 (L’integral)",
        description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: "22 April 2021",
        comments: 10
    },
    {
        id: 3,
        image: "/images/alt-3.jpg",
        title: "Loudest à la Madison #1 (L’integral)",
        description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
        date: "22 April 2021",
        comments: 10
    }
]

export default function FeaturedPosts() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto flex max-w-[1050px] flex-col gap-20">
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-[#23A6F0] text-sm font-bold">
                        Practice Advice
                    </p>

                    <h2 className="text-4xl font-bold text-[#252B42]">
                        <span className="lg:hidden ">
                            Featured Products
                        </span>
                        <span className="hidden lg:inline">
                            Featured Posts
                        </span>
                    </h2>

                    <p className="max-w-[470px] text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>

                    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-3">
                        {posts.map((post) => (
                            <div key={post.id} className="w-full max-w-[330px] lg:min-w-0 lg:max-w-[348px] lg:flex-1">
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}