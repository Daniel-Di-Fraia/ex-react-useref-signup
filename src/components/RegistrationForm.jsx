import { useState } from "react";

function RegistrationFrom() {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [spec, setSpec] = useState('');
    const [experience, setExperience] = useState(0);
    const [description, setDescription] = useState('');
    

    const handleSubmit = (e) => {
        let dati = {};
        e.preventDefault();
        
        if (experience > 0 && spec !== '') {
            dati = { name, userName, password, spec, experience, description };
            console.log(dati);
        } else {
            alert("inserisci anni esperienza e/o spec corretti")
        }

        setName('');
        setUserName('');
        setPassword('');
        setSpec('');
        setExperience(0);
        setDescription('');

    };

        
   

    return (
        <>
            <h1>Registrati!</h1>
            <form className="flex-form" onSubmit={handleSubmit}>
                <label>Nome</label>
                <input
                    placeholder="inserisci nome"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Username</label>
                <input
                    placeholder="inserisci username"
                    value={userName}
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    placeholder="inserisci password"
                    value={password}
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>Specializzazione</label>
                <select value={spec} onChange={(e) => setSpec(e.target.value)}>
                    <option value="">-- Seleziona --</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                <label>Anni di esperienza</label>
                <input
                    placeholder="inserisci anni di esperienza"
                    value={experience}
                    type="number"
                    onChange={(e) => setExperience(e.target.value)}
                    required
                />
                <label>Descrizione</label>
                <textarea
                    placeholder="inserisci descrizione personale"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Registrati!</button>
            </form>
        </>
    )
}

export default RegistrationFrom
