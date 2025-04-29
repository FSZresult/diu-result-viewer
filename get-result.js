export default async function handler(req, res) {
  const { studentId, semester } = req.query;

  if (!studentId || !semester) {
    return res.status(400).json({ error: "Missing studentId or semester" });
  }

  try {
    const apiUrl = `https://studentportal.diu.edu.bd/api/studentresult/GetStudentResult?studentId=${studentId}&semester=${semester}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
