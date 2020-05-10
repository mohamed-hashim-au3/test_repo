import classNames from 'classnames'
export default function ErrorAlert({error}) {
    return (
        <div className={classNames("c-error alert alert-danger", {
            "d-none": !error
        })}>
            {error}
        </div>
    )
}
