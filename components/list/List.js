import Link from 'next/link'

const List = ({items}) => <ul className="c-list">{
    items.map(({name, link}, key)=> <li className="c-list__item" key={key}>
        {
            link ? (
                <Link href={link}>
                    <a className="c-list__link">{name}</a>
                </Link>
            ) : <span className="c-list__link">{name}</span>
        }
    </li>)}
</ul>
export default List