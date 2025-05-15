const data = [
  { question: "Pergunta1", response: "Responsta1", active: false },
  { question: "Pergunta2", response: "Responsta2", active: true },
  { question: "Pergunta3", response: "Responsta3", active: false },
];


function renderList() {
  const faqList = document.getElementById("faq_list");
  faqList.innerHTML = ''

  data.map((el, index) => {
    const faqContainer = document.createElement("div");
    const faqQuestion = document.createElement("div");
    const faqResponse = document.createElement("div");
    //Container
    faqContainer.classList.add("faq_container");
    faqContainer.setAttribute("id", `faq${index}`);
    //Question
    faqQuestion.classList.add("faq_question");
    faqQuestion.textContent = el.question;
    faqQuestion.setAttribute("onclick", `toggleFaqActive(${index})`);
    //Response
    faqResponse.classList.add("faq_response");
    if (el.active) {
      faqResponse.classList.add("faq_response_active");
    }
    // el.active && faqResponse.classList.add("faq_response_active") 
    faqResponse.textContent = el.response;
    // add question and response in container
    faqContainer.appendChild(faqQuestion);
    faqContainer.appendChild(faqResponse);
    faqList.appendChild(faqContainer);
  });
}

function toggleFaqActive(index){
  data[index].active = !data[index].active
  renderList()
}

renderList();
