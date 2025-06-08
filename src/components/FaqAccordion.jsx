// FaqAccordion.jsx (Client component)
'use client';

import { Accordion } from "@chakra-ui/react";

export default function FaqAccordion({ questions }) {

    const items = [
        {
            question: questions.question1,
            answer: questions.answer1
        },
        {
            question: questions.question2,
            answer: questions.answer2
        },
        {
            question: questions.question3,
            answer: questions.answer3
        },
        {
            question: questions.question4,
            answer: questions.answer4
        },
        {
            question: questions.question5,
            answer: questions.answer5
        },
        {
            question: questions.question6,
            answer: questions.answer6
        },
        {
            question: questions.question7,
            answer: questions.answer7
        },
    ];

    return (
        <div className="faq-accordion">
            <Accordion.Root collapsible >
                {items.map((item, index) => (
                    <Accordion.Item key={index} value={String(index)}>
                        <Accordion.ItemTrigger>
                            <h3>{item.question}</h3>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <p>{item.answer}</p>
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    );
}