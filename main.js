const $newSkill = $("#newSkillBtn");
const $listSkill = $(".skills-list");
$listSkill.on("click", "button", deleteSkill);
$newSkill.on("click", addSkill);

function addSkill() {
  const $inputForm = $("#skillsInput");
  if ($inputForm.val() === "") {
    return;
  } else {
    $(".find").remove();
    const $newInputVal = $inputForm.val();
    $listSkill.append(
      `<li><button class="remove">X</button>${$newInputVal}</li>`
    );
  }
}

function deleteSkill(event) {
  const list = $(event.target).parent();
  $(list).remove();
  if ($listSkill.children().length <= 0) {
    $listSkill.append("List Skills");
  }
}
