import "../CSS/file.css";

export default function Header() {
  return (
    <header id="who-i-am" className="Header-container">
      <div className="Intro-container">
        <p>Hello, My name is Victor</p>
      </div>
      <div className="Who-Am-I-Container">
        <h1>I am a software developer</h1>
      </div>
      <div className="skill-description-container">
      <p>
          I’m Victor Diaz, a full-stack web developer, I'm from come
          Cuba. I've been building stuff on the web for the last 3 years,
          working with clients and industries. My focus
          is on creating engaging, accessible & performant interfaces and databases for
          people.
        </p>
        <p>
          Three years of experience in Object Oriented software development in
          developing Web applications using the .NET Core. Passionate about
          business modeling and architectural software design. Strong knowledge
          of C#, SQL Server programming, HTML5, CSS3, JavaScript and React
          Understanding of Web security. Excellent communication and
          interpersonal skills. Very strong analytical, problem solving and
          architectural design skills.
        </p>
      </div>
    </header>
  );
}
