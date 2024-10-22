import React from "react";

export default function Profile() {
    const profiles = [
        {
            name: "Asha",
            followers: 120,
            github: "https://github.com/asaanjelina",
            username: "asaanjelina",
        },
        {
            name: "Allwan",
            followers: 250,
            github: "https://github.com/allwzz",
            username: "allwzz",
        },
        {
            name: "Daffa",
            followers: 1000,
            github: "https://github.com/daffanndf",
            username: "daffanndf",
        },
        {
            name: "Sandro",
            followers: 180,
            github: "https://github.com/Sandro-C-Rajagukguk",
            username: "Sandro-C-Rajagukguk",
        },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
            <h1>Profile</h1>
            <div style={{ width: "80%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                {profiles.map((profile, index) => (
                    <div key={index} style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center" }}>
                        <img
                            src={`https://github.com/${profile.username}.png`}
                            alt={`${profile.name}'s profile`}
                            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        />
                        <h2>{profile.name}</h2>
                        <p>Followers: {profile.followers}</p>
                        <a href={profile.github} style={{ color: "#61dafb" }} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}





     
    
     