import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";
it('new post should be added', () => {
    let action = addPostActionCreator("rrrr")
    let state = {
        posts: [],
    };

 let newState =   profileReducer (state,action)

    newState.posts.length === 1


    expect(newState.posts.length).toBe(1)
})
