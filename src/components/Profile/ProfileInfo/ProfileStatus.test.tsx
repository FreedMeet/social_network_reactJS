import React from "react";
import {create} from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

//TODO: Recreate tests for ProfileStatus component with hooks
describe("ProfileStatus component", () => {
    // test("status from props should be in state", () => {
    //     const component = create(<ProfileStatusWithHooks status="New status text"/>);
    //     const instance = component.getInstance();
    //     expect(instance?.state.status).toBe("New status text");
    // });
    test("After creating span should be displayed", () => {
        const component = create(<ProfileStatusWithHooks status="New status text"/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("After creating span should be displayed with correct status", () => {
        const component = create(<ProfileStatusWithHooks status="New status text"/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('New status text');
    });
    test("After creating input should`t be displayed", () => {
        const component = create(<ProfileStatusWithHooks status="New status text"/>);
        const root = component.root;
        expect(() => {
            root.findByType('input')
        }).toThrow();
    });
    test("Input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatusWithHooks status="New status text"/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('New status text');
    });
    // test("Callback should be called", () => {
    //     const mockCallback = jest.fn()
    //     const component = create(<ProfileStatusWithHooks status="New status text" updateStatus={mockCallback}/>);
    //     const instance = component.getInstance();
    //     instance?.deactivateEditMode();
    //     expect(mockCallback.mock.calls.length).toBe(1);
    // });
});