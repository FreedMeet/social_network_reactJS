import classes from "./Users.module.css";
import {Field, Form, Formik} from "formik";
import Button from "../Common/button/Button";
import {FilterType} from "../../redux/usersReducer";
import {FC} from "react";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
export const UsersSearchForm: FC<PropsType> = ({onFilterChanged}) => {

    const submit = (values: FilterType,
                    {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        onFilterChanged(values)
        setSubmitting(false)
    }

    return (
        <div className={classes.searchBlock}>
            <Formik
                initialValues={{term: '', friend: null}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form className={classes.searchBlock_Form}>
                        <div>
                            <Field type="text" name="term"/>
                            <Field as="select" name="friend">
                                <option value="null">All</option>
                                <option value="true">followed</option>
                                <option value="false">unfollowed</option>
                            </Field>
                        </div>
                        <Button width={'60px'} height={'40px'} type="submit" disabled={isSubmitting}>
                            Find
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}