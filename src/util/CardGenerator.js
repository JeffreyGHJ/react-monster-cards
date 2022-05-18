import CardDetails from "../assets/CardDetails";

function CardGenerator() {
    let generatedCards = [];
    for ( let monster of CardDetails.monsters ) {
      let generatedCard = {
        ...monster,
        maxHealth: monster.health
      };
      generatedCards.push(generatedCard);
    }
    return generatedCards;
}

export default CardGenerator;