function PageHeader({ title, subtitle }) {
  return (
    <>
      <h2
        style={{
          padding: "40px 0",
          fontSize: "2rem",
        }}
      >
        {title}
      </h2>
      <p>{subtitle}</p>
    </>
  );
}

export default PageHeader;
