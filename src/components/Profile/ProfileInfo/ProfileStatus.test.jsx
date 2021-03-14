import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="New status text"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("New status text");
    });
    test("After creating p should be displayed", () => {
        const component = create(<ProfileStatus status="New status text"/>);
        const root = component.root;
        let span = root.findByType('p')
        expect(span).not.toBeNull();
    });
    test("After creating p should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="New status text"/>);
        const root = component.root;
        let span = root.findByType('p')
        expect(span.children[0]).toBe('New status text');
    });
    test("After creating input should`t be displayed", () => {
        const component = create(<ProfileStatus status="New status text"/>);
        const root = component.root;
        expect(() => {
            root.findByType('input')
        }).toThrow();
    });
    test("Input should be displayed in editMode instead of p", () => {
        const component = create(<ProfileStatus status="New status text"/>);
        const root = component.root;
        let span = root.findByType('p');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('New status text');
    });
    test("Callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="New status text" updateStatusTC={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});