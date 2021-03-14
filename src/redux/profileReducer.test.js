import profileReducer, {addPostAC, deletePostAC} from "./profileReducer";

let state = {
    PostsData: [
        { id: 1, message: "Hi! how are you?", publishedTime: "12:01" },
        { id: 2, message: "It`s my first post", publishedTime: "12:00" },
    ],
    newPostText: '',
    profile: null,
    status: ''
};

let testPost = 'New post'

test('Length of state should be increment', () => {
    let action = addPostAC(testPost)
    let newState = profileReducer(state, action)

    expect(newState.PostsData.length).toBe(state.PostsData.length + 1)
});

test('Text of new post should be correct', () => {
    let action = addPostAC(testPost)
    let newState = profileReducer(state, action)

    expect(newState.PostsData[newState.PostsData.length - 1].message).toBe(testPost)
});

test('After delete posts count should be decrement', () => {
    let action = deletePostAC(2)
    let newState = profileReducer(state, action)

    expect(newState.PostsData.length).toBe(state.PostsData.length - 1)
});

test('After delete posts count should`t be decrement if Id incorrect', () => {
    let action = deletePostAC(1000)
    let newState = profileReducer(state, action)

    expect(newState.PostsData.length).toBe(state.PostsData.length)
});