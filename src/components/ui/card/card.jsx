import './card.css';

const Card = ({children, id}) => (
  <div className="card" id = {id}>
    {children}
  </div>
);

export default Card;