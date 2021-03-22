import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Textarea} from "../../Common/formControls/formControls";
import {required} from "../../../utils/validators";
import Button from "../../Common/button/Button";
import React, {FC} from "react";
import {PostObjectType} from "./MyPosts";

const MyPostForm: FC<InjectedFormProps<PostObjectType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                placeholder="What happens?"
                name={'newPostText'}
                component={Textarea}
                validate={[required]} />
            <Button width={'20%'} height={'40px'}>Add post</Button>
        </form>
    )
};

export default reduxForm<PostObjectType>({ form: 'myPosts' })(MyPostForm);
