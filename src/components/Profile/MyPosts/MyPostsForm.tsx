import {reduxForm, InjectedFormProps} from "redux-form"
import {createField, Textarea} from "../../Common/formControls/formControls"
import {required} from "../../../utils/validators"
import Button from "../../Common/button/Button"
import React, {FC} from "react"
import {PostObjectType} from "./MyPosts"

const MyPostForm: FC<InjectedFormProps<PostObjectType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<MyPostFormValueTypeKeys>('What happens?', "newPostText",
            [required], Textarea)}
            <Button width={'20%'} height={'40px'}>Add post</Button>
        </form>
    )
}

type MyPostFormValueTypeKeys = Extract<keyof { newPostText: string }, string>

export default reduxForm<PostObjectType>({ form: 'myPosts' })(MyPostForm)
