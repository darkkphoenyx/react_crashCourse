interface CardProps {
  cardImage: string;
  cardTitle: string;
  cardDetails: string;
  cardLink: string;
}
const Card = ({ cardImage, cardDetails, cardLink, cardTitle }: CardProps) => {
  return (
    <div className="relative h-80 w-60 rounded-xl shadow-2xl">
      <img
        className="h-full w-full object-cover rounded-xl"
        src={cardImage}
        alt="image"
      />
      <div className="absolute bottom-0 py-4 rounded-b-2xl p-4 bg-gradient-to-t from-gray-900 text-white w-full to-transparent">
        <h1 className=" font-bold text-3xl mb-2">{cardTitle}</h1>
        <p className="text-gray-200">{cardDetails}</p>
        <a href={cardLink}>
          <button className="bg-black p-2 rounded-xl mt-4 font-medium hover:bg-gray-600">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
