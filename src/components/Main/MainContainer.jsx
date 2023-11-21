import Card from "./Card";
import "./main.css";

const MainContainer = () => {
  const cards = [
    { Id: 1, Text: "Football" },
    { Id: 2, Text: "Football" },
    { Id: 3, Text: "Football" },
    { Id: 4, Text: "Football" },
    { Id: 5, Text: "Football" },
    { Id: 6, Text: "Football" },
  ];
  return (
    <main>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.Id} data={card} />
        ))}
      </div>
    </main>
  );
};

export default MainContainer;
