import React from "react";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#eee",
                padding: "10px 20px"
            }}
        >
            <div>Logo</div>
            <div>
                <a href="/">Home</a>{" | "}
                <a href="/about">About</a>{" | "}
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;