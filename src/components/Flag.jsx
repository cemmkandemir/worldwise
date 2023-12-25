function Flag({ emoji }) {
  if (!emoji) return null;

  emoji = emoji.toLowerCase();
  const BASE_URL = `https://flagcdn.com/28x21/${emoji}.png`;

  return <img src={BASE_URL} alt={`Flag of ${emoji}`} />;
}

export default Flag;
