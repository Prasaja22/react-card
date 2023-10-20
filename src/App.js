function App() {
  let profile = "/images/profile.jpeg";

  return (
    <div className="container">
      <div className="img-container">
        <img src={profile} />
      </div>
      <Content />
    </div>
  );
}

function Content() {
  let textContent = `Frontend developer adalah seorang profesional dalam dunia pengembangan
  perangkat lunak yang bertanggung jawab untuk merancang, mengembangkan,
  dan memelihara tampilan dan antarmuka pengguna (UI) dari sebuah situs
  web atau aplikasi. Mereka bekerja untuk memastikan bahwa pengguna
  memiliki pengalaman yang baik saat menggunakan produk perangkat lunak,
  baik dalam hal tampilan maupun fungsionalitasnya.`;

  return (
    <div className="content">
      <NamePerson name="Ghozy Nouval Satya Prasaja" />
      <ContentText content={textContent} />
      <TagContainer />
    </div>
  );
}

function NamePerson(props) {
  return <h2>{props.name}</h2>;
}

function ContentText(props) {
  return (
    <div className="content-text">
      <p>{props.content}</p>
    </div>
  );
}

function TagContainer() {
  return (
    <div className="tag-container">
      <Tag title="HTML + CSS 😁" color="red" />
      <Tag title="JavaScript 😍" color="blue" />
      <Tag title="Web Design 🥳" color="cadetblue" />
      <Tag title="React 🤩" color="grey" />
      <Tag title="Laravel 😄" color="green" />
      <Tag title="Git And Github 😀" color="brown" />
    </div>
  );
}

function Tag(props) {
  return (
    <div className="tag">
      <p style={{ background: props.color }}>{props.title}</p>
    </div>
  );
}

export default App;
