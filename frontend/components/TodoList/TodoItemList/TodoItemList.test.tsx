import TodoItemList from ".";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe('TodoItemList',() => {

    it('renders an item list',() => {

        const item = {
            id: 'itemid',
            text: 'asdf',
            done: false
        }
        
        render(<TodoItemList item={item} />)
        expect(screen.getByTestId("todoitem")).toBeInTheDocument();
        expect(screen.getByTestId("todotext")).toHaveTextContent(item.text);

    })

    it('renders an item list with strikethrough',() => {

        const item = {
            id: 'itemid',
            text: 'zxcv',
            done: true
        }
        
        render(<TodoItemList item={item} />)
        expect(screen.getByTestId("todoitem")).toBeInTheDocument();
        expect(screen.getByTestId("todotext")).toHaveTextContent(item.text);
        expect(screen.getByTestId("todostrike")).toBeInTheDocument();

    })


})
