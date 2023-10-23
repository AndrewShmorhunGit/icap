export function formatDate(inputDate: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const parts = inputDate.split("-");
  const day = parts[0];
  const monthIndex = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10) < 1000 ? "19" + parts[2] : parts[2];

  return `${day} ${months[monthIndex]} ${year}`;
}

export function getAge(dateOfBirth: string) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth.split("-").reverse().join("-"));

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
