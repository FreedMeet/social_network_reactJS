import classes from "./Users.module.css";
import {Field, Form, Formik} from "formik";
import Button from "../Common/button/Button";
import {FilterType} from "../../redux/usersReducer";
import React, {FC} from "react";
import {useSelector} from "react-redux";
import {appStateType} from "../../redux/redux-store";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: FriendFormType
}

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
export const UsersSearchForm: FC<PropsType> = React.memo(({onFilterChanged}) => {

    const filter = useSelector((state: appStateType) => state.usersPage.filter)

    const submit = (values: FormType,
                    {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
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
})