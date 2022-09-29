class MultipleChoice extends Question {
  constructor(type, id, content, answers) {
    super(type, id, content, answers);
  }

  render(index) {
    let answersHTML = "";
    for (let item of this.answers) {
      answersHTML += `<div>
        <input value="${item.id}" class="answer-${this.id}" type="radio" name="answer-${this.id}"  />
        <label class="lead">${item.content}</label>
      </div>`;
    }

    return `
      <div>
        <p class="lead font-italic" style="font-size: 30px;">
          Câu ${index}: ${this.content}
        </p>
        ${answersHTML}
      </div>
      `;
  }

  checkExact() {
    const inputList = document.getElementsByClassName(`answer-${this.id}`);

    let answerId;

    for (let input of inputList) {
      if (input.checked) {
        answerId = input.value;
      }
    }

    if (!answerId) {
      return false;
    }

    for (let answer of this.answers) {
      if (answerId === answer.id) {
        return answer.exact;
      }
    }

    return false;
  }
}
