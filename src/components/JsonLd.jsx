const JsonLd = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(Array.isArray(schema) ? schema : [schema]),
    }}
  />
);

export default JsonLd;
