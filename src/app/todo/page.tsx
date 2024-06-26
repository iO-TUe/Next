"use client"
import { KeyboardEvent, useRef, useState } from "react"
import Counter from "../../../../react/src/components/counter.gen"
import Item from "../../../../react/src/components/item"
import '../../../../react/src/views/todo.css'

export default function Todo() {
    const id = useRef(0)
    const [items, setItems] = useState<{ id: number, text: string }[]>([])

    function addItem({ key, target }: KeyboardEvent<HTMLInputElement>) {
        if (key === "Enter" && (target as HTMLInputElement).value) {
            setItems([...items, { id: id.current++, text: (target as HTMLInputElement).value }]);
            (target as HTMLInputElement).value = ''
        }
    }

    function removeItem(rid: number) {
        setItems(items.filter(({ id }) => id !== rid))
    }

    // console.log("Script: Todo")
    return <>
        {/* {console.log("Render: Todo")} */}
        <section id="todo">
            <label >
                <h2>Add new item</h2>
                <input id="input" onKeyUp={addItem} />
            </label>
            <ul className="list">
                {items.map(item => <Item key={item.id} item={item} remove={removeItem} />)}
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={5} recurse={false} />
        </section>
    </>
}

