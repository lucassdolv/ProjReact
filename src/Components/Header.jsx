const Header = () =>{
    const HeaderStyle = {
        backgroundColor: "black",
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid red'
    };
    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: 'red'
    }
    return(
        <header style={HeaderStyle}>
            <h1 style={titleStyle}>First System</h1>
        </header>
    );
};

export default Header;