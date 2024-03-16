export const PageHeader = ({ title, subtitle }) => (
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
