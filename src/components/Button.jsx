export default function Button() {
    const {children, ...rest} = props;
    return (
        <button {...rest}>{children}</button>
    )
}