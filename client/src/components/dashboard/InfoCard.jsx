import "../../styles/card.css";

function InfoCard({ title, amount, icon, change, color }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className={`card-icon ${color}`}>
          {icon}
        </div>

        <div>
          <h3>{title}</h3>
          <p>{amount}</p>
        </div>
      </div>

      <span className="card-change">
        {change} from last month
      </span>
    </div>
  );
}

export default InfoCard;