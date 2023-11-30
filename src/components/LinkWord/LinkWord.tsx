const LinkWord = ({ text, url }) => {
  const style = { color: "#ffbf00", textDecoration: "none" };
  return (
    <>
      <a style={style} href={url} target="_blank">
        {`${text}`}
      </a>
    </>
  );
};

export default LinkWord;
