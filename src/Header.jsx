import "./CSS/file.css";


export default function Header(){

    return (
        <header className="Header-container">
            <div className="Intro-container">
                <p>
                    Hello, My name is Victor
                </p>
            </div>
            <div className="Who-Am-I-Container">
                <h1>
                    I am a software developer
                </h1>
            </div>
            <div className="skill-description-container">
                <p>
                    Almost 3 years of experience in Object Oriented software development in developing Web applications using the .NET Core.
                    Passionate about business modeling and architectural software design. Strong knowledge of C#, SQL Server programming, HTML5, CSS3, JavaScript and React
                    Understanding of Web security. Excellent communication and interpersonal skills. Very strong analytical, problem solving and architectural design skills.
                </p>
            </div>
        </header>
    );

}