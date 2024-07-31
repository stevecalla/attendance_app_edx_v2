export const validateCSVContent = async (csvContent) => {
  // Check if content contains a specific word
  const validationPatternStudents = /^"name"/i;
  const validationPatternParticipants =
    /^User Name,User Email,Join time,Leave time/i;

  const studentsIsValid = validationPatternStudents.test(csvContent);
  const participantsIsValid = validationPatternParticipants.test(csvContent);
  const isValid = studentsIsValid || participantsIsValid;

  return isValid;
}