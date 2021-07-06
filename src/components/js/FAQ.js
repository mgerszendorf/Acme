import React, { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(false);

  const question_and_answer_data = [
    {
      id: 0,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci amet, nulla tempor dolor lectus ornare velit. Dui sed blandit id sed. Elit, auctor sit consectetur maecenas. Nunc eget tempor, a diam sit. Risus dolor egestas ut mauris, dignissim nec. Bibendum rhoncus orci lobortis iaculis arcu. Aenean fermentum aliquet tortor viverra suscipit velit semper sit sollicitudin.",
    },
    {
      id: 1,
      question:
        "Magna pulvinar sit mauris scelerisque libero enim, aliquet vitae.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci amet, nulla tempor dolor lectus ornare velit. Dui sed blandit id sed. Elit, auctor sit consectetur maecenas. Nunc eget tempor, a diam sit. Risus dolor egestas ut mauris, dignissim nec. Bibendum rhoncus orci lobortis iaculis arcu. Aenean fermentum aliquet tortor viverra suscipit velit semper sit sollicitudin.",
    },
    {
      id: 2,
      question:
        "Habitasse iaculis tortor, placerat quam quam nibh odio dignissim tempor.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci amet, nulla tempor dolor lectus ornare velit. Dui sed blandit id sed. Elit, auctor sit consectetur maecenas. Nunc eget tempor, a diam sit. Risus dolor egestas ut mauris, dignissim nec. Bibendum rhoncus orci lobortis iaculis arcu. Aenean fermentum aliquet tortor viverra suscipit velit semper sit sollicitudin.",
    },
    {
      id: 3,
      question:
        "At consectetur faucibus bibendum faucibus donec risus aliquam quam.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci amet, nulla tempor dolor lectus ornare velit. Dui sed blandit id sed. Elit, auctor sit consectetur maecenas. Nunc eget tempor, a diam sit. Risus dolor egestas ut mauris, dignissim nec. Bibendum rhoncus orci lobortis iaculis arcu. Aenean fermentum aliquet tortor viverra suscipit velit semper sit sollicitudin.",
    },
  ];

  function activeQuestionFunction() {
    setActiveQuestion(!activeQuestion);
  }

  return (
    <section className="faq">
      <div className="faq_heading">
        <h1>FIND OUT MORE</h1>
        <h2>Questions and Answers</h2>
      </div>
      {question_and_answer_data.map((data) => (
        <div className="qaa" onClick={activeQuestionFunction}>
          <div className={activeQuestion ? "active_question" : "question"}>
            <p>{data.question}</p>
            <RiArrowUpSLine
              className={activeQuestion ? "active_faq_arrow" : "faq_arrow"}
            />
          </div>
          <div className={activeQuestion ? "active_answer" : "answer"}>
            <p>{data.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
