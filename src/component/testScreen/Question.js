import QuestionItem from "./QuestionItem";

function Question(props) {
    return (
        <>
            <div className="container">
                {props.question.map((quest) => (
                    <QuestionItem 
                    key={quest.id}
                    id={quest.id}
                    tag={quest.tag}
                    question={quest.question}
                    option={quest.option}
                    />
                ))}
            </div>
        </>
    );
}
export default Question;