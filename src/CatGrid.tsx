import type { CatType } from "./cats/cats"

interface CatGridprops {
    cats: CatType[]
}

export function CatGrid({ cats }: CatGridprops) {
    return <div className="px-8 py-6">
        <h2>Cat Grid</h2>
        <div className="flex flex-col gap-3">

            {cats.map((cat) =>
                <div>
                    <img src={cat.image} className="rounded-xl shadow-md shadow-black/40" />
                    <h2 className="font-serif text-2xl"> {cat.name}</h2>
                </div>
            )}
        </div>
    </div>
}