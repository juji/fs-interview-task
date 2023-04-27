import "@testing-library/jest-dom";

import TodoItemInput from ".";
import { jest } from '@jest/globals';
import { render, screen, fireEvent } from "@testing-library/react";

describe('TodoItemInput',() => {
    
    it('renders an item input',() => {
        
        const item = {
            id: 'itemid',
            text: 'asdf',
            done: false
        }

        const onUpdate = jest.fn()
        const onRemove = jest.fn()
        
        render(<TodoItemInput item={item} onUpdate={onUpdate} onRemove={onRemove} />) 

        const doneButton = screen.getByTestId("todoitemdone")
        const input = screen.getByTestId("todoiteminput")
        const todoitemremove = screen.getByTestId("todoitemremove")
        
        expect(doneButton).toBeInTheDocument();
        expect(todoitemremove).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(item.text)

    })

    it('renders an item input with input disabled',() => {
        
        const item = {
            id: 'itemid',
            text: 'asdf',
            done: true
        }

        const onUpdate = jest.fn()
        const onRemove = jest.fn()
        
        render(<TodoItemInput item={item} onUpdate={onUpdate} onRemove={onRemove} />) 

        const input = screen.getByTestId("todoiteminput")
        expect(input).toHaveProperty('disabled', true)

    })

    it('should handle update',async () => {

        const item = {
            id: 'itemid',
            text: 'asdf',
            done: true
        }

        const onUpdate = jest.fn()
        const onRemove = jest.fn()
        
        render(<TodoItemInput item={item} onUpdate={onUpdate} onRemove={onRemove} />)

        const doneButton = screen.getByTestId("todoitemdone")
        const todoitemremove = screen.getByTestId("todoitemremove")
        const input = screen.getByTestId("todoiteminput")
        const form = screen.getByTestId("todoitemform")

        // update text
        fireEvent.change(input,{ target: { value: 'zxcv' } } )
        fireEvent.submit(form)
        expect(onUpdate).toHaveBeenCalledWith( item.id, 'zxcv', item.done );

        // update done
        fireEvent.click(doneButton)
        expect(onUpdate).toHaveBeenCalledWith( item.id, item.text, !item.done );

        // remove
        fireEvent.click(todoitemremove)
        expect(onRemove).toHaveBeenCalledWith( item.id );



    })

    it('should handle failed update',() => {

        const item = {
            id: 'itemid',
            text: 'asdf',
            done: true
        }

        const onUpdate = jest.fn(() => {throw new Error('asdf')})
        const onRemove = jest.fn(() => {throw new Error('asdf')})
        
        render(<TodoItemInput item={item} onUpdate={onUpdate} onRemove={onRemove} />)

        const doneButton = screen.getByTestId("todoitemdone")
        const todoitemremove = screen.getByTestId("todoitemremove")
        const input = screen.getByTestId("todoiteminput")
        const form = screen.getByTestId("todoitemform")

        // update text
        fireEvent.change(input,{ target: { value: 'zxcv' } } )
        fireEvent.submit(form)
        expect(onUpdate).toHaveBeenCalledWith( item.id, 'zxcv', item.done );
        expect((input as HTMLInputElement).value).toBe(item.text)

        // update done
        fireEvent.click(doneButton)
        expect(onUpdate).toHaveBeenCalledWith( item.id, item.text, !item.done );
        doneButton.textContent?.match('☑')

        // remove
        fireEvent.click(todoitemremove)
        expect(onRemove).toHaveBeenCalledWith( item.id );


    })


})
