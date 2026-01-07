import { useState } from "react";

function RegistrationFrom() {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [spec, setSpec] = useState('');
    const [experience, setExperience] = useState(0);
    const [description, setDescription] = useState('');

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:'.<>?/`~";

    const isUsernameValid = () => {
        if (userName.length < 6) return false;
        // Controlla che ogni carattere sia alfanumerico
        return userName.split('').every(char => letters.includes(char) || numbers.includes(char));
    };

    const isPasswordValid = () => {
        if (password.length < 8) return false;
        const chars = password.split('');
        const hasLetter = chars.some(char => letters.includes(char));
        const hasNumber = chars.some(char => numbers.includes(char));
        const hasSymbol = chars.some(char => symbols.includes(char));
        return hasLetter && hasNumber && hasSymbol;
    };

    const isDescriptionValid = () => {
        const trimmed = description.trim();
        return trimmed.length >= 100 && trimmed.length <= 1000;
    };


    const handleSubmit = (e) => {
        let dati = {};
        e.preventDefault();

        if (experience > 0 && spec !== '' && isUsernameValid() && isPasswordValid() && isDescriptionValid()) {
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
                {userName && (
                    <span style={{ color: isUsernameValid() ? 'green' : 'red', fontSize: '12px' }}>
                        {isUsernameValid() ? "✅ Username valido" : "❌ Solo lettere/numeri, min. 6 caratteri"}
                    </span>
                )}
                <label>Password</label>
                <input
                    placeholder="inserisci password"
                    value={password}
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {password.length > 0 && (
                    <span style={{ color: isPasswordValid() ? 'green' : 'red', fontSize: '12px', display: 'block' }}>
                        {isPasswordValid() ? "✅ Password valida" : "❌ Min. 8 char (1 lett, 1 num, 1 simb)"}
                    </span>
                )}
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
                {description.length > 0 && (
                    <span style={{ color: isDescriptionValid() ? 'green' : 'red', fontSize: '12px', display: 'block' }}>
                        {isDescriptionValid() ? "✅ Descrizione valida" : `❌ Lunghezza: ${description.trim().length}/100-1000`}
                    </span>
                )}
                <button type="submit">Registrati!</button>
            </form>
        </>
    )
}

export default RegistrationFrom
