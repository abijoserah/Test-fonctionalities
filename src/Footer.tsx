import type { CatType } from "./cats/cats";

export function Footer({ catsList }: { catsList: CatType[] }) {
    return (<footer className='w-full bg-sky-50'>
        <div className='flex py-4  px-3 gap-5 flex-wrap'>

            {catsList.map((cat) => <span>{cat.name}</span>)}
        </div>
    </footer>)
}