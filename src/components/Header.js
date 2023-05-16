const Header = () => {
    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"

        }
    }

    return (
        <header style={styles.header}>
            <section>✒️Writeology</section>
            <section>Cart DropBox DropDown-Menu</section>
        </header>
    )
}

export default Header