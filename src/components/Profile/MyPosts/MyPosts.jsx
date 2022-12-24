import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field} from "redux-form/es";
import {reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElements
        = props.posts.map(post => <Post message={post.message} numberOfLikes={post.numberOfLikes}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postBlock}>
            <h3>Мої пости</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

let maxLength10 = maxLengthCreator(10)
let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Текст посту"}
                   validate={[required,maxLength10 ]} />
        </div>
        <div>
            <button>Опублікувати пост</button>
        </div>
    </form>;
}
const AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'}) (AddNewPostForm)
export default MyPosts;