const LinkWord = ({ text, url }) => {
  const style = { color: "#ffbf00", textDecoration: "none" };
  return (
    <>
      <a style={style} href={url}>
        {`${text}`}
      </a>
    </>
  );
};

export default LinkWord;
