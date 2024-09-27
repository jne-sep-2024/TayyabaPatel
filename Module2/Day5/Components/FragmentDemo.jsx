import { Fragment } from "react";

export default function FragmentDemo() {
    const items = [
        { id: 101, name: "tayyaba", age: 22 },
        { id: 102, name: "tayyaba", age: 22 }
    ];

    return (
        <>
            {items.map(item => (
                <Fragment key={item.id}>
                    <h1>Hii</h1>
                    <p>{item.name}</p>
                </Fragment> 
            ))}
            <h1>fragment demo</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                doloribus porro velit. Minus ab, similique quis suscipit modi quidem
                unde blanditiis eos assumenda consectetur quod hic ipsa sapiente neque
                quae adipisci molestiae repellat libero sunt incidunt amet. Tenetur,
                quidem repellendus. Neque fugit atque rem adipisci.
            </p>
        </>
    );
}
