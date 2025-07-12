import '../styles/FactCheckResult.scss';

const FactCheckResult = ({ result }) => {
  if (!result) return null;

  const { status, description, method } = result;

  // Normalize status to lowercase for class use
  const statusClass = status?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="factCheckResult">
      <div className={`statusBadge ${statusClass}`}>
        {status}
      </div>
      <p className="description">{description}</p>
      <p className="method">Verified using: <strong>{method}</strong></p>
    </div>
  );
};

export default FactCheckResult;
